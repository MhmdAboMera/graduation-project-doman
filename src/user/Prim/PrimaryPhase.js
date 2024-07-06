import Course from "./Course";
import styles from "./Primary.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
function PrimaryPhase() {
  const { LevelId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [semesterId, setSemesterId] = useState("0");
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [level, setLevel] = useState([]);
  const getLevel = () => {
    fetch(`https://gradprojectapp.runasp.net/api/Level/${LevelId}`)
      .then((res) => res.json())
      .then((data) => setLevel(data.semesters));
  };
  const getSubjects = (semesterId) => {
    fetch(`https://gradprojectapp.runasp.net/api/Semester/${semesterId}`)
      .then((res) => res.json())
      .then((data) => setSubjects(data.subjects));
  };
  console.log("level :", level);
  console.log("subjects :", subjects);

  useEffect(() => {
    getLevel();
    AOS.init({ duration: 2000 });
  }, []);

  const handleSemesterClick = (semesterId) => {
    setSelectedSemester(semesterId);
  };
  return (
    <section className={`${styles.PrimaryPhase} py-5`}>
      <div className="container py-3">
        <div className="row py-3">
          <p className={`${styles.txt} text-center mt-4 row`}>
            حدد الترم الدراسي:
          </p>
          <div className="row py-3">
            {level.map((semester) => (
              <div
                key={semester.id}
                className={`${styles.phasesBtns} text-center col-sm-12 col-md-4`}
              >
                <button
                  className={`${styles.button}`}
                  onClick={() => {
                    handleSemesterClick(semester.id);
                    setSemesterId(semester.id);
                    getSubjects(semester.id);
                  }}
                >
                  {semester.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className={`${styles.txt}`}>حدد الماده الدراسيه:</p>
        <div className="row">
          {subjects.map((subject) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={subject.id}
              data-aos="flip-up"
            >
              <Course
                title={subject.name}
                src={subject.img}
                subjectId={subject.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrimaryPhase;
