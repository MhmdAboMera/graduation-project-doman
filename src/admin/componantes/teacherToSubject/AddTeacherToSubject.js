import axios from "axios";
import { useEffect, useRef, useState } from "react";

function AddTeacherToSubject() {
  const [AllSubjects, setAllSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [subjectId, setsubjectId] = useState(0);
  const [teacherId, setTeacherId] = useState(0);
  const selectSubjectInput = useRef();
  const selectTeacherInput = useRef();
  console.log("subjectId", subjectId);
  console.log("teacherId", teacherId);
  console.log("AllSubjects", AllSubjects);
  console.log("teachers", teachers);
  const getAllSubjects = () => {
    fetch(`https://gradprojectapp.runasp.net/api/Subject`)
      .then((res) => res.json())
      .then((data) => setAllSubjects(data));
  };
  const getAllTeachers = () => {
    fetch(`https://gradprojectapp.runasp.net/api/User/GetAllTeachers`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  };
  useEffect(() => {
    getAllSubjects();
    getAllTeachers();
  }, []);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://gradprojectapp.runasp.net/api/SubjectTeacher`, {
        userID: teacherId,
        subjectID: subjectId,
      })
      .then((data) => {
        console.log(data);
      });
    selectSubjectInput.current.value = "اختر المادة الدراسية";
    selectTeacherInput.current.value = "اختر المدرس";
  };
  return (
    <>
      <div className="content-wrapper" style={{ minHeight: 430 }}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="card card-info">
                  <div className="card-header header-bg bg-success">
                    <h3 className="card-title header-title">
                      اضافه مواد دراسية
                    </h3>
                  </div>
                  <form className="form-horizontal" id="" onSubmit={formSubmit}>
                    <div className="card-body">
                      <div className="row  ">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                              <div className="form-group">
                                {/* <label>Select</label> */}
                                <select
                                  ref={selectSubjectInput}
                                  className="form-control"
                                  onChange={(e) => {
                                    setsubjectId(e.target.value);
                                    console.log(e.target.value);
                                  }}
                                >
                                  <option>اختر المادة الدراسية</option>
                                  {AllSubjects.map((subject) => {
                                    return (
                                      <option
                                        key={subject.id}
                                        value={subject.id}
                                      >
                                        {subject.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                              <div className="form-group">
                                <select
                                  ref={selectTeacherInput}
                                  className="form-control"
                                  onChange={(e) => {
                                    setTeacherId(e.target.value);
                                    console.log(e.target.value);
                                  }}
                                >
                                  <option>اختر المدرس </option>
                                  {teachers.map((teacher) => {
                                    return (
                                      <option
                                        key={teacher.userId}
                                        value={teacher.userId}
                                      >
                                        {teacher.userName}
                                      </option>
                                    );
                                  })}
                                </select>
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
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTeacherToSubject;
