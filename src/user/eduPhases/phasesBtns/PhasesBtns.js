import styles from "./PhasesBtns.module.css";
import { useEffect, useState } from "react";
import styles1 from "./Phases.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; 
import Swal from "sweetalert2";

function PhasesBtns({ onButtonClick }) {
  const [phasesData, setPhasesData] = useState([]);
  const [phase, setPhase] = useState({});
  const [showCard, setShowCard] = useState(false);
  const { isLoggedIn } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("http://gradprojectapp.runasp.net/api/Phase")
      .then((res) => res.json())
      .then((data) => setPhasesData(data));
  }, []);

  const getPhase = (phaseId) => {
    if (isLoggedIn) {
      fetch(`http://gradprojectapp.runasp.net/api/Phase/${phaseId}`)
        .then((res) => res.json())
        .then((data) => {
          setPhase(data);
          setShowCard(true); 
        });
    } else {
      Swal.fire({
        title: "سجل دخولك للوصول للمحتوى",
        confirmButtonText: "حسنا ",
      })
    }
  };

  return (
    <>
      <section className={`${styles.phasesBtns} py-5`} id="phaseBtns">
        <div className={`container py-5`}>
          <div className={`row align-items-center justify-content-center`}>
            <div className={`col-md-6 col-sm-12 d-flex flex-column align-items-center`}>
              <h1>المرحلة التعليمية!</h1>
              <div className={`d-flex flex-column align-items-center`}>
                {phasesData.map((phase) => (
                  <a href="#phaseCard" key={phase.id}>
                    <button
                      className={`btn ${styles.phaseButton} mb-3`}
                      onClick={() => {
                        onButtonClick(phase.id);
                        getPhase(phase.id);
                      }}
                    >
                      {phase.name}
                    </button>
                  </a>
                ))}
              </div>
            </div>
            <div className={`col-md-6 col-sm-12`}>
              <img
                src="/imges/step1.png"
                alt="YourPhoto"
                className={`img-fluid`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally render the card section */}
      {showCard && (
        <section id="phaseCard" className={`${styles.phases} py-5 `}>
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 d-flex flex-column align-items-center">
                <div className={`${styles1.card}`}>
                  <div className={`${styles1.header}`}>
                    <div className={`${styles1.stageImage}`}>
                      <img
                        src={phase.imageFile}
                        alt="يلا نتعلم"
                        title="يلا نتعلم"
                        className={`img-fluid ${styles1.stageImage}`}
                      />
                    </div>
                    <span className={`d-flex flex-column ${styles1.title}`}>
                      <h3>{phase.name}</h3>
                    </span>
                  </div>

                  <div className={`d-flex flex-column ${styles1.content}`}>
                    {phase.levels?.map((level) => (
                      <Link
                        key={level.id}
                        to={`/semester/${level.id}`}
                        className={`link-item`}
                      >
                        <FontAwesomeIcon icon={faChevronLeft} /> {level.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PhasesBtns;
