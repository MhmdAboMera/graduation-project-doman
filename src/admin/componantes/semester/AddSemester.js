import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import trueImg from "../../img/true.png";
function Semester() {
  const selectInput = useRef();
  const nameInput = useRef();
  const photoInput = useRef();
  const [name, setName] = useState("");
  const [allSemesters, setAllSemesters] = useState([]);
  const [levels, setLevels] = useState([]);
  const [levelId, setlevelId] = useState(0);
  const [photo, setPhoto] = useState("");
  const getAllLevels = () => {
    fetch(`http://gradprojectapp.runasp.net/api/Level`)
      .then((res) => res.json())
      .then((data) => setLevels(data));
  };
  console.log(allSemesters);
  const getAllSemesters = () => {
    fetch(`http://gradprojectapp.runasp.net/api/Semester`)
      .then((res) => res.json())
      .then((data) => setAllSemesters(data));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("levelId", levelId);
    formData.append("imageFile", photo);
    axios
      .post(`http://gradprojectapp.runasp.net/api/Semester`, formData)
      .then((data) => {
        getAllSemesters();
      });
    nameInput.current.value = "";
    selectInput.current.value = "اختر الصف الدراسي";
    photoInput.current.value = "";
  };
  useEffect(() => {
    getAllSemesters();
    getAllLevels();
  }, []);
  const deleteClass = (oneClass) => {
    Swal.fire({
      title: `Are You Sure To Delete ${oneClass.name} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        // fetch(`http://localhost:5141/api/Level/${oneClass.id}`, {
        //   method: "DELETE",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     getAllSemesters();
        //   });
        axios
          .delete(
            `http://gradprojectapp.runasp.net/api/Semester/${oneClass.id}`
          )
          .then((res) => {
            getAllSemesters();
            console.log("Level deleted successfully:", res.data);
          })
          .catch((error) => {
            console.error("An error occurred while deleting the level:", error);
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
                  <h3 className="card-title header-title">اضافه ترم دراسي</h3>
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
                                placeholder="اضافه ترم  دراسي"
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
                                  setlevelId(e.target.value);
                                }}
                              >
                                <option> اختر الصف الدراسي </option>
                                {levels.map((levelId) => {
                                  return (
                                    <option key={levelId.id} value={levelId.id}>
                                      {levelId.name}
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
                  <h3 className="card-title ">الترم الدراسي</h3>
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
                  <table className="table table-hover text-nowrap table-responsive-sm">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>الترم الدراسي</th>
                        <th> الصف الدراسي</th>
                        <th>الصورة</th>
                        <th className="text-center">العمليات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allSemesters.map((Class) => {
                        return (
                          <tr key={Class.id}>
                            <td>{Class.id}</td>
                            <td>{Class.name}</td>
                            <td>{Class.levelName}</td>
                            <td>
                              {" "}
                              <img
                                style={{ width: "80px", height: "80px" }}
                                src={Class.imageFile}
                                alt="Stage Image"
                              />
                            </td>
                            <td>
                              <div className="text-center d-flex justify-content-center">
                                <Link
                                  to={`/admin/edit-semester/${Class.id}`}
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
                                    deleteClass(Class);
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
export default Semester;
