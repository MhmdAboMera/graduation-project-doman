import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
// import trueImg from "../../img/true.png";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
function AddTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const userNameInput = useRef();
  const emailInput = useRef();
  const photoInput = useRef();
  let i = 1;
  //   const [allSemesters, setAllSemesters] = useState([]);
  //   const [description, setDescription] = useState("");
  //   const [semesterId, setSemesterId] = useState(0);
  console.log(teachers);
  useEffect(() => {
    getAllTeachers();
  }, []);
  const getAllTeachers = () => {
    fetch(`http://gradprojectapp.runasp.net/api/User/GetAllTeachers`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", "Mhmd@gmail.com1");
    formData.append("imageFile", photo);

    axios
      .post(
        `http://gradprojectapp.runasp.net/api/Auth/register/teacher`,
        formData
      )
      .then((data) => {
        console.log(data);
        getAllTeachers();
        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
        userNameInput.current.value = "";
        emailInput.current.value = "";
        // photoInput.current.value = "";
      });
  };
  console.log("teachers :", teachers);

  const deleteStage = (teacher) => {
    Swal.fire({
      title: `Are You Sure To Delete ${teacher.firstName} ${teacher.lastName}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://gradprojectapp.runasp.net/api/User/${teacher.userId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllTeachers();
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
                  <h3 className="card-title header-title">اضافه مدرس</h3>
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
                                  setFirstName(e.target.value);
                                }}
                                ref={firstNameInput}
                                required
                                type="text"
                                className="form-control"
                                placeholder="اسم المدرس "
                              />
                            </div>
                          </div>
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
                                  setLastName(e.target.value);
                                }}
                                ref={lastNameInput}
                                required
                                type="text"
                                className="form-control"
                                placeholder="اسم والد المدرس "
                              />
                            </div>
                          </div>
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
                                  setUserName(e.target.value);
                                }}
                                ref={userNameInput}
                                required
                                type="text"
                                className="form-control"
                                placeholder="اسم المستخدم "
                              />
                            </div>
                          </div>
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
                                  setEmail(e.target.value);
                                }}
                                ref={emailInput}
                                required
                                type="email"
                                className="form-control"
                                placeholder="البريد الالكتروني"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="form-group">
                              <input
                                // ref={photoInput}
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
                  <table className="table table-hover text-nowrap table-responsive-lg">
                    <thead>
                      <tr>
                        <th>الترتيب</th>
                        <th>اسم المستخدم</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher) => {
                        return (
                          <tr key={teacher.userId}>
                            {/* <td>{teacher.userId}</td> */}
                            <td>{i++}</td>
                            <td>{teacher.userName}</td>
                            <td>
                              <div className="text-center d-flex justify-content-center">
                                <Link
                                  to={`/admin/edit-subject/${teacher.id}`}
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
                                <button
                                  onClick={() => {
                                    deleteStage(teacher);
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
export default AddTeacher;
