import React, { useEffect } from "react";
import girl2 from "../../../images/home33.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faVolumeUp,
  faCommentDots,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./azaker.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
function AzayAzaker() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={`${styles.Azaylearning} my-5`}>
      <div className="container">
        <div className={`${styles.flex_container}`}>
          <div className={`${styles.custom_row}`}>
            <div className={`${styles.col_3}`}>
              <div>
                <img
                  src="/imges//Group-7.webp"
                  alt="يلا نتعلم"
                  title="يلا نتعلم"
                  className={`${styles.img_fluid}`}
                />
              </div>
            </div>
            <div className={`${styles.col_9}`}>
              <p className={`${styles.heading}`}> ازاي اذاكر</p>
            </div>
          </div>
        </div>
        <div className={`${styles.cardcontainer}`}>
          <div className="col-sm-12 col-md-3">
            <div className={`${styles.card}`}>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "40px" }} />
              <h4>هتشارك</h4>
              <p>في مجموعات للمناقشه</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={`${styles.card}`}>
              <FontAwesomeIcon icon={faVolumeUp} style={{ fontSize: "40px" }} />
              <h4>هتفهم</h4>
              <p>من خلال الشرح</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={`${styles.card}`}>
              <FontAwesomeIcon
                icon={faCommentDots}
                style={{ fontSize: "40px" }}
              />
              <h4>هتدرب</h4>
              <p>علي امتحانات </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={`${styles.card}`}>
              <FontAwesomeIcon icon={faPenRuler} style={{ fontSize: "40px" }} />
              <h4>هتحل</h4>
              <p>اسئلة متعددة </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className={`${styles.learning}`}>
          <div className={`${styles.flex_container}`}>
            <div className={`${styles.custom_row}`}>
              <div className={`${styles.col_3}`}>
                <div>
                  <img
                    src="/imges//Group-7.webp "
                    alt="يلا نتعلم"
                    title="يلا نتعلم"
                    className={`${styles.img_fluid}`}
                  />
                </div>
              </div>
              <div className={`${styles.col_9}`}>
                <p className={`${styles.heading}`}> الاختبارت </p>
              </div>
            </div>
          </div>
          <div className={`${styles.Containers}`}>
            <div className="row align-items-center">
              <div className={`col-sm-12 col-md-6`}>
                <p className={`${styles.paragraph}`}>
                  يوجد اختبارات خاصة بالمواد لتدريب الطالب علي طرق الاسئلة
                  المتنوعة وكيفيه التعامل معها لمواكبة طرق التعلم يوجد اختبارات
                  خاصة بالمواد لتدريب الطالب علي طرق الاسئلة المتنوعة وكيفيه
                  التعامل معها لمواكبة طرق التعلم يوجد اختبارات خاصة بالمواد
                  لتدريب الطالب علي طرق الاسئلة المتنوعة وكيفيه التعامل معها
                  لمواكبة طرق التعلم
                </p>
              </div>
              <div className={`col-sm-12 col-md-6`}>
                <img className={`${styles.images}`} src={girl2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AzayAzaker;
