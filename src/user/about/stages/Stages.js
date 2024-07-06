import styles from "./Stages.module.css";
import { useEffect, useState } from "react";

function Stages() {
  const [phasesData, setPhasesData] = useState([]);
  useEffect(() => {
    fetch("https://gradprojectapp.runasp.net/api/Phase")
      .then((res) => res.json())
      .then((data) => setPhasesData(data));

  }, []);
  return (
    <section className={`${styles.stages} py-5`}>
      <div className={`container py-3`}>
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
            <div className={`col-9 align-items-center`}>
              <p className={`fs-2 fw-bold heading main-color`}>
                المراحل التعليمية
              </p>
            </div>
          </div>
        </div>
        <div className={`row`}>
          {phasesData.map((phase, index) => (
            <div key={index} className={`col-sm-12 col-md-4`}>
              {/* <div className={` ${styles.card} p-3`}> */}
              <div className={styles.card}>
                <div className={styles.center}>
                  <p className={styles.cardContent}>{phase.name}</p>
                </div>
              </div>

              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stages;
