import styles from "./Learning.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

function Learning() {
  return (
    <section className={`${styles.learning}`}>
      <div className={`container`}>
        <div className={`d-flex flex-row gap-2 align-items-center py-4`}>
          <div className={`row align-items-center`}>
            <div className={`col-3`}>
              <div>
                <img
                  src="/imges//Group-7.webp "
                  alt=" يلا نتعلم"
                  title="يلا نتعلم"
                  className={`img-fluid img-heed`}
                />
              </div>
            </div>
            <div className={`col-9`}>
              <p className={`fs-2 fw-bold heading`}>عملية التعلم</p>
            </div>
          </div>
        </div>
        <div className={`row justify-content-center`}>
          <div className={`${styles.b} col-sm-12 col-md-3 m-3`}>
            <div className={`m-5`}>
              <p>
                الطلاب&nbsp;
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "1.4em", marginTop: "10px" }}
                />
              </p>
              <p>2600</p>
            </div>
          </div>
          <div className={`${styles.b} col-sm-12 col-md-3 m-3`}>
            <div className={`m-5`}>
              <p>
                المدرسين&nbsp;
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: "1.4em", marginTop: "10px" }}
                />
              </p>
              <p>500</p>
            </div>
          </div>
          <div className={`${styles.b} col-sm-12 col-md-3 m-3`}>
            <div className={`m-5`}>
              <p>
                الكورسات &nbsp;
                <FontAwesomeIcon
                  icon={faChartSimple}
                  style={{ fontSize: "1.4em", marginTop: "10px" }}
                />
              </p>
              <p>100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;
