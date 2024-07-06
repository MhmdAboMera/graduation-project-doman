import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <section className="footer py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <div className="log-img">
              <img
                src="/imges/logo-black.png"
                alt="logo imge"
                className="img-fluid logo mb-2"
              />
            </div>
            <h3>انضم إلينا الآن!</h3>
            <p className="text-dark mt-3">
              عدة طرق منصه تحتوى على متنوعه للشرح والاسئله
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="heed d-flex align-items-center flex-column">
              <h3>اللينكات</h3>
              <img
                src="/imges/Vector 2.webp"
                alt="logo imge"
                className="img-fluid logo"
              />
            </div>
            <div className="links  line-after">
              <ul>
                <li className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <NavLink to={"/home"} className="text-dark">
                    الرئيسيه
                  </NavLink>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <NavLink to={"/about"} className="text-dark">
                    من نحن
                  </NavLink>{" "}
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <a href="" className="text-dark">
                    {" "}
                    المحتوى التعليمى
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <a href="" className="text-dark">
                    {" "}
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="sochal-hed fw-bold">
              <div className="heed d-flex align-items-center flex-column">
                <h3>التواصل</h3>
                <img
                  src="/imges/Vector 2.webp"
                  alt="logo imge"
                  className="img-fluid logo"
                />
              </div>
            </div>
            <div className="sochal-icons">
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
