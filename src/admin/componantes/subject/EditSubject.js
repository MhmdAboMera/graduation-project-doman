import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
// import trueImg from "../../img/true.png";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function EditSubject() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const { subjectId } = useParams();
  const nameInput = useRef();
  const desInput = useRef();
  const selectInput = useRef();
  const photoInput = useRef();
  const [photo, setPhoto] = useState("");
  const [allSemesters, setAllSemesters] = useState([]);
  const [description, setDescription] = useState("");
  const [semesterId, setSemesterId] = useState(0);
  console.log("subjectId" + subjectId);
  const getAllSemesters = () => {
    fetch(`http://gradprojectapp.runasp.net/api/Semester`)
      .then((res) => res.json())
      .then((data) => setAllSemesters(data));
  };
  useEffect(() => {
    axios
      .get(`http://gradprojectapp.runasp.net/api/Subject/${subjectId}`)
      .then((data) => {
        nameInput.current.value = data.data.name;
        desInput.current.value = data.data.description;
        selectInput.current.value = data.data.semesterId;
      });

    getAllSemesters();
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", "");
    formData.append("prerequisites", "");
    formData.append("semesterId", semesterId);
    formData.append("imageFile", photo);
    axios
      .put(
        `http://gradprojectapp.runasp.net/api/Subject/${subjectId}`,
        formData
      )
      .then((response) => {
        console.log("Success:", response);
      })
      .then((data) => {
        navigate(`/admin/add-subject`);
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.log("Error Response:", error.response.data);
        } else if (error.request) {
          // Request was made but no response received
          console.log("Error Request:", error.request);
        } else {
          // Something else happened while setting up the request
          console.log("Error Message:", error.message);
        }
        console.log("Error Config:", error.config);
      });

    nameInput.current.value = "";
    desInput.current.value = "";
    selectInput.current.value = "اختر الترم الدراسي";
  };
  return (
    <div className="content-wrapper" style={{ minHeight: 430 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card card-info">
                <div className="card-header header-bg bg-success">
                  <h3 className="card-title header-title">تعديل مواد دراسية</h3>
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
                          {/* <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div class="form-group">
                              <input
                                ref={photoInput}
                                onChange={handleImageChange}
                                placeholder="الصورة"
                                type="file"
                                name="myImage"
                                accept="image/png, image/gif, image/jpeg"
                              />
                            </div>
                          </div> */}
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
        </div>
      </div>
    </div>
  );
}
export default EditSubject;
