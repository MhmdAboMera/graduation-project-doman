import styles from "./Vision.module.css";

function Vision() {
  return (
    <section className={`${styles.vision} py-5`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-sm-12 col-md-4 ${styles.boxContent}`}>
            <div class={`${styles.box} shadow`}>
              <img src="/imges/leadership.png" alt="goal" />
              <div className={styles.txt}>
                <h4>الرسالة</h4>
                <p>وصول الطالب للمعلومات</p>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-4 ${styles.boxContent}`}>
            <div class={`${styles.box} shadow`}>
              <img src="/imges/mission.png" alt="goal" />
              <div className={styles.txt}>
                <h4>المهمة</h4>
                <p>وهي استيعاب الطالب لها</p>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-4 ${styles.boxContent}`}>
            <div class={`${styles.box} shadow`}>
              <img src="/imges/goal.png" alt="goal" />
              <div className={styles.txt}>
                <h4>الهدف</h4>
                <p>الحصول على الدرجات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Vision;
