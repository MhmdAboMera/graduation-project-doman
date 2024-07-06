import React from 'react';
import styles from './home_landing.module.css';

function HomeLanding() {
  return (
    <section className={`${styles.Homelanding} ${styles.my3}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col_12} ${styles.title}`}>
            <h1>منصة يلا نتعلم</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLanding;
