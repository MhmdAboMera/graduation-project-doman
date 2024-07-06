import styles from './home_learning.module.css'

import React from 'react';
function HomeLearning() {
    return (
        <div className={styles.section1}>
            <div className="container">
                <div className={`${styles.flex_container}`}>
                    <div className={`${styles.custom_row}`}>
                        <div className={`${styles.col_3}`}>
                            <div>
                                <img
                                    src="/imges//Group-7.webp "
                                    alt=" يلا نتعلم"
                                    title="يلا نتعلم"
                                    className={`${styles.img_fluid}`} />
                            </div>
                        </div>
                        <div className={`${styles.col_9}`}>
                            <p className={`${styles.heading}`}> المدرسين</p>
                        </div>
                    </div >
                </div >
                <p className={styles.paragraph}>
                    بخطوات بسيطه يمكنك الوصول لافضل المدرسين والمتخصصين للمرحلتين الاعدادية والثانوية .
                    بخطوات بسيطه يمكنك الوصول لافضل المدرسين والمتخصصين للمرحلتين الاعدادية والثانوية .
                </p>

            </div >

        </div >
    )
}

export default HomeLearning;