import styles from "./Role.module.css";

function Role() {
    return (
        <section className={`${styles.role} py-5`}>
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
                        <div className={`col-9 `}>
                            <h1>ماذا نقدم ؟</h1>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-12 col-md-4 box-content `}>
                        <div className={` ${styles.card} shadow p-3`}>
                            <div className={`${styles.front}`}>
                                <img src="/imges/step4.jpg" className={`img-fluid ${styles.boxIm}`} />
                                <h3>
                                    حصص جماعية
                                </h3></div>
                            <div className={`${styles.back}`}>
                                <img src="/imges/p2.png" className={`img-fluid ${styles.boxIm}`} />
                                <h5>تعلم مع اصدقائك في فصول دروس جماعية وتفاعلية</h5></div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-4 box-content`}>
                        <div className={` ${styles.card} shadow p-3`}>
                            <div className={`${styles.front}`}>
                                <img src="/imges/stud2.jpg" className={`img-fluid ${styles.boxIm}`} />
                                <h3>
                                    مساعدات دراسية
                                </h3></div>
                            <div className={`${styles.back}`}>
                                <img src="/imges/p1.jpg" className={`img-fluid ${styles.boxIm}`} />
                                <h5>اطرح سؤالا وسيقوم فورا احد مدرسينا المعتمدين بشرحه بشكل مرئي</h5></div>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-4 box-content`}>
                        <div className={` ${styles.card} shadow p-3`}>
                            <div className={`${styles.front}`}>
                                <img src="/imges/step4.png" className={`img-fluid ${styles.boxIm}`} />
                                <h3>
                                    امتحانات واسئلة
                                </h3></div>
                            <div className={`${styles.back}`}>
                                <img src="/imges/p4.jpg" className={`img-fluid ${styles.boxIm}`} />
                                <h5>بمجرد تسجيل دخولك تجد مجموعة متنوعة</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Role;
