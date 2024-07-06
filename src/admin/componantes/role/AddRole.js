import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
// import trueImg from "../../img/true.png";
function Role() {
  const [name, setName] = useState("");
  const [roles, setRoles] = useState([]);
  const nameInput = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://gradprojectapp.runasp.net/api/Role`, {
        name,
      })
      .then((data) => {
        // getAllRoles();
      });
    nameInput.current.value = "";
  };
  //   const getAllRoles = () => {
  //     fetch(`http://localhost:5141/api/Role`)
  //       .then((res) => res.json())
  //       .then((data) => setRoles(data));
  //   };
  //   useEffect(() => {
  //     getAllRoles();
  //   }, []);
  // console.log(stages);
  //   const deleteRole = (role) => {
  //     Swal.fire({
  //       title: `Are You Sure To Delete ${role.name} ?`,
  //       showCancelButton: true,
  //     }).then((data) => {
  //       if (data.isConfirmed) {
  //         axios
  //           .delete(`http://localhost:5141/api/Level/${role.id}`)
  //           .then((res) => {
  //             getAllRoles();
  //             console.log("Level deleted successfully:", res.data);
  //           })
  //           .catch((error) => {
  //             console.error("An error occurred while deleting the level:", error);
  //           });
  //       }
  //     });
  //   };
  return (
    <div className="content-wrapper" style={{ minHeight: 430 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card card-info">
                <div className="card-header header-bg bg-success">
                  <h3 className="card-title header-title">اضافه Rloe</h3>
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
          {/* <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header bg-info">
                  <h3 className="card-title"> Roles </h3>
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
                        <th>الترتيب</th>
                        <th>الاسم</th>
                        <th className="text-center">العمليات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((role) => {
                        return (
                          <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>
                              <div className="text-center d-flex justify-content-center">
                                <Link
                                  to={`/admin/edit-role/${role.id}`}
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
                                    deleteRole(role);
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Role;
