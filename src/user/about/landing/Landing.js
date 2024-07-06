import styles from "./Landing.module.css";

function Landing() {
  return (
    <section className={`${styles.landing}`}>
      <div className={styles.overlay}></div>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-md-8 ${styles.title}`}>
            <h5>منصة يلا نتعلم</h5>
            <p>
              هى منصة تعليمية خاصة بالمرحلة الإعدادية والثانوية ولها عدة محاور
              تعليمية مثل (<span>الرسالة، المهمة، الهدف</span>) وسنعرف معنى كل
              واحد على حده.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
