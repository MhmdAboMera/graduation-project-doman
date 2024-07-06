import { Link } from "react-router-dom";
import styles from "./course.module.css";

function Course(props) {
  return (
    <section className={`${styles.Course} py-5`}>
      <div className="container py-3">
        <div className={`row ${styles.box} mb-4`}>
          <div className="col-9 col-md-6 col-sm-3">
            <p className={styles.txt}>{props.title}</p>
            <Link to={`/SubjectDetails/${props.subjectId}`} className="link-item">
              <button className={`btn btn-primary ${styles.button}`}>ابدأ</button>
            </Link>
          </div>
          <div className="col-9 col-md-6 col-sm-3">
            <img src={props.src} alt={props.title} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
