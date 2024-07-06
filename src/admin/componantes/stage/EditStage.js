import edit from "../../img/edit.png";
import trash from "../../img/trash.png";
import add from "../../img/plus.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import trueImg from "../../img/true.png";
function EditStage() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const { stageId } = useParams();
  const photoInput = useRef();
  const nameInput = useRef();
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://gradprojectapp.runasp.net/api/Phase/${stageId}`).then((data) => {
      nameInput.current.value = data.data.name;
      // photoInput.current.value = data.data.imageFile;
    });
  }, []);
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("imageFile", photo);
    axios
      .put(`https://gradprojectapp.runasp.net/api/Phase/${stageId}`, formData)
      .then((data) => {
        navigate(`/admin/add-stage`);
      });
    nameInput.current.value = "";
    photoInput.current.value = "";
  };
  return (
    <div className="content-wrapper" style={{ minHeight: 430 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card card-info">
                <div className="card-header header-bg bg-success">
                  <h3 className="card-title header-title">
                    تعديل المرحلة الدراسية
                  </h3>
                </div>
                <form className="form-horizontal" id="" onSubmit={formSubmit}>
                  <div className="card-body">
                    <div className="row  ">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
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
                                ref={nameInput}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                required
                                type="text"
                                className="form-control"
                                placeholder={`  تعديل المرحلة الدراسية : ${stageId}`}
                              />
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
export default EditStage;
