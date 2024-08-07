import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
// import trueImg from "../../img/true.png";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
function AddSubject() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [subjects, setSubjects] = useState([]);
  const nameInput = useRef();
  const desInput = useRef();
  const selectInput = useRef();
  const photoInput = useRef();
  const [allSemesters, setAllSemesters] = useState([]);
  const [description, setDescription] = useState("");
  const [semesterId, setSemesterId] = useState(0);
  const getAllSemesters = () => {
    fetch(`https://gradprojectapp.runasp.net/api/Semester`)
      .then((res) => res.json())
      .then((data) => setAllSemesters(data));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("semesterId", semesterId);
    formData.append("prerequisites", "");
    formData.append("category", "");
    formData.append("description", description);
    formData.append("imageFile", photo);

    axios
      .post(`https://gradprojectapp.runasp.net/api/Subject`, formData)
      .then((data) => {
        getAllSubject();
      });
    nameInput.current.value = "";
    desInput.current.value = "";
    photoInput.current.value = "";
    selectInput.current.value = "اختر الترم الدراسي";
  };
  const getAllSubject = () => {
    fetch(`https://gradprojectapp.runasp.net/api/Subject`)
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  };
  useEffect(() => {
    getAllSubject();
    getAllSemesters();
  }, []);
  const deleteStage = (subject) => {
    Swal.fire({
      title: `Are You Sure To Delete ${subject.name} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://gradprojectapp.runasp.net/api/Subject/${subject.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllSubject();
          });
      }
    });
  };
  return (
    <div className="content-wrapper" style={{ minHeight: 430 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card card-info">
                <div className="card-header header-bg bg-success">
                  <h3 className="card-title header-title">اضافه مواد دراسية</h3>
                </div>
                <form className="form-horizontal" id="" onSubmit={formSubmit}>
                  <div className="card-body">
                    <div className="row  ">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  {/* <i className="fas fa-envelope" /> */}
                                  <img
                                    src={add}
                                    className="lordicon"
                                    width={20}
                                  />
                                </span>
                              </div>
                              <input
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                ref={nameInput}
                                required
                                type="text"
                                className="form-control"
                                placeholder="اسم المادة الدراسية  "
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="form-group">
                              {/* <label>Select</label> */}
                              <select
                                ref={selectInput}
                                className="form-control"
                                onChange={(e) => {
                                  setSemesterId(e.target.value);
                                }}
                              >
                                <option>اختر الترم الدراسي</option>
                                {allSemesters.map((semester) => {
                                  return (
                                    <option
                                      key={semester.id}
                                      value={semester.id}
                                    >
                                      {semester.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="form-group">
                              <input
                                ref={photoInput}
                                onChange={(e) => {
                                  setPhoto(e.target.files[0]);
                                }}
                                placeholder="الصورة"
                                type="file"
                                name="myImage"
                                accept="image/png, image/gif, image/jpeg"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="form-group">
                              {/* <label>Textarea</label> */}
                              <textarea
                                ref={desInput}
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                                className="form-control"
                                rows="3"
                                placeholder="الوصف"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-footer */}
                  <div className="card-footer d-flex justify-content-end mt-2">
                    <button
                      type="submit"
                      className="btn btn-sm btn-outline-success hint--right"
                      aria-label="حفظ"
                    >
                      <i className="fa fa-check " aria-hidden="true" />
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm mr-2 hint--right"
                      aria-label="حذف"
                      type="reset"
                    >
                      <i className="fas fa-undo" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header bg-info">
                  <h3 className="card-title">المواد الدراسية</h3>
                  <div className="card-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: 150 }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <table className="table table-hover text-nowrap table-responsive">
                    <thead>
                      <tr>
                        <th>الترتيب</th>
                        <th>الاسم</th>
                        <th>الترم</th>
                        <th>الصوره</th>
                        <th>الوصف</th>
                        <th className="text-center">العمليات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((subject) => {
                        return (
                          <tr key={subject.id}>
                            <td>{subject.id}</td>
                            <td>{subject.name}</td>
                            <td>{subject.semesterName}</td>
                            <td>
                              {" "}
                              <img
                                style={{ width: "80px", height: "80px" }}
                                src={subject.imageUrl}
                                alt="Subject Image"
                              />
                            </td>
                            <td>{subject.description}</td>
                            <td>
                              <div className="text-center d-flex justify-content-center">
                                <Link
                                  to={`/admin/edit-subject/${subject.id}`}
                                  id="editButton"
                                  className="btn btn-sm btn-outline-warning btn-rounded mx-1 hint--right"
                                  aria-label="تعديل"
                                  title="تعديل"
                                >
                                  <img
                                    src={edit}
                                    className="lordicon"
                                    width={20}
                                  />
                                </Link>
                                {/* <button
                                className="btn btn-sm btn-outline-warning btn-rounded mx-1 hint--right"
                                aria-label="نسخ"
                                title="نسخ"
                              >
                                <i className="far fa-copy" />
                              </button> */}
                                {/* <button
                                className="btn btn-sm btn-outline-info mx-1  btn-rounded hint--left"
                                aria-label="اضافة صور للسيارة"
                                title="اضافة صور للسيارة"
                              >
                                <img src={add} className="lordicon" width={20} />
                              </button> */}
                                <button
                                  onClick={() => {
                                    deleteStage(subject);
                                  }}
                                  className="btn btn-sm btn-outline-danger mx-1 btn-rounded hint--left"
                                  aria-label="حذف "
                                  title="حذف"
                                >
                                  <img
                                    src={trash}
                                    className="lordicon"
                                    width={20}
                                  />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSubject;
