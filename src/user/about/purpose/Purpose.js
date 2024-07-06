import styles from "./Purpose.module.css";

function Purpose() {
    return (
        <section className={`${styles.purpose} py-3`} >
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
                            <h1>الهدف من المنصة</h1>
                        </div>

                    </div>
                </div>
                <div className={`row align-items-center justify-content-center`}>
                <div className={`col-md-6 col-sm-12 d-flex flex-column align-items-center`}>
                        <p>تتناسب مع تطوير المهارات المتنوعة لدى الطالب في مختلف المواد.
                            تتطور طرق التعلم كل يوم وهدفنا هو ايجاد افضل طريقة في مختلف المواد</p>

                    </div>
                    <div className={`col-md-6 col-sm-12`}>
                        <img
                            src="/imges/purpose.gif "
                            alt=" يلا نتعلم"
                            title="يلا نتعلم"
                            className={`${styles.containerImg}`}
                        />
                        {/* <img
                                src="/imges/layer1.png "
                                alt=" يلا نتعلم"
                                title="يلا نتعلم"
                                className={`${styles.layer1} img-fluid`}
                            /> */}
                        {/* </div> */}
                    </div>
                </div>

            </div>
        </section>

    );
}
export default Purpose;
