import styles from "./study.module.css";
import Teacher from "./Teachers/Teacher";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SubjectDetails() {
  const { subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://gradprojectapp.runasp.net/api/Subject/${subjectId}`)
      .then((res) => res.json())
      .then((data) => setSubject(data))
      .catch((err) => setError(err.message));
    AOS.init({ duration: 2000 });
  }, [subjectId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!subject) {
    return <div>Loading...</div>;
  }

  const { chapters } = subject;

  return (
    <section className={`${styles.SubjectDetails} py-5`}>
      <div className="container py-3">
        <div className={`${styles.txt3} row`}>
          <section className={`${styles.course} py-5`}>
            <div className="row justify-content-center mb-4">
              <div className={`col-lg-6 ${styles.container3}`}>
                <p className={styles.p3}>{subject.name}</p>
                <p className={styles.description}>{subject.description}</p>
              </div>
              <div className={`col-lg-6 ${styles.image1}`}>
                <img
                  src={subject.imageUrl}
                  alt={subject.name}
                  className="img-fluid"
                />
              </div>
            </div>
          </section>
        </div>
        <div className={styles.content}>
          <h3 className={`${styles.txt3} text-center`}>شرح الماده:</h3>
        </div>
        <div className="row justify-content-center">
          <ul className={`${styles.list}`}>
            {chapters &&
              chapters.map((chapter, index) => (
                <div key={index} className={`py-3 d-flex`}>
                  <li className={`${styles.item}`}>
                    <a href={chapter.videoURL} target="_blank">
                      <img
                        src="/imges/video.png"
                        alt="YourPhoto"
                        className={`${styles.img} img-fluid`}
                      />
                      <span className={`${styles.link}`}>شرح</span>
                    </a>
                  </li>
                  <li className={`${styles.item}`}>
                    <a href={chapter.pdfQuestions} target="_blank">
                      <img
                        src="/imges/questions.png"
                        alt="Questions"
                        className={`${styles.img} img-fluid`}
                      />
                      <span className={`${styles.link}`}>أسئلة</span>
                    </a>
                  </li>
                  <li className={`${styles.item}`}>
                    <a href={chapter.pdfQuestions} target="_blank">
                      <img
                        src="/imges/book.png"
                        alt="Book"
                        className={`${styles.img} img-fluid`}
                      />
                      <span className={`${styles.link}`}>كتاب</span>
                    </a>
                  </li>
                  <li className={`${styles.item}`}>
                    <a href={chapter.pdfSummary} target="_blank">
                      <img
                        src="/imges/summary.png"
                        alt="Summary"
                        className={`${styles.img} img-fluid`}
                      />
                      <span className={`${styles.link}`}>مراجعات</span>
                    </a>
                  </li>
                  <li className={`${styles.item}`}>
                    <a href="#" target="_blank">
                      <img
                        src="/imges/quizes.png"
                        alt="Quizzes"
                        className={`${styles.img} img-fluid`}
                      />
                      <span className={`${styles.link}`}>امتحانات</span>
                    </a>
                  </li>
                </div>
              ))}
          </ul>
        </div>
        <h3 className={`${styles.txt3} text-center`}>حدد مدرسك:</h3>
        <div className="row justify-content-center">
          <div className={`col-md-12 col-sm-3 mb-4`}>
            <Teacher src="/imges/Teacher1.png" desc="أستاذ عبدالله معين" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SubjectDetails;
