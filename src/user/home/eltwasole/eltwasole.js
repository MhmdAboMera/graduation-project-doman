import styles from './eltwasole.module.css'
import Card from './card';

function Eltwasole(){
    return (
        <div className='container'>
            <section>
                <div className={`${styles.flex_container}`}>
                    <div className={`${styles.custom_row}`}>
                        <div className={`${styles.col_3}`}>
                            <div>
                                <img
                                    src="/imges//Group-7.webp "
                                    alt=" يلا نتعلم"
                                    title="يلا نتعلم"
                                    className={`${styles.img_fluid}`}
                                />
                            </div>
                        </div>
                        <div className={`${styles.col_9}`}>
                            <p className={`${styles.heading}`}> التواصل </p>
                        </div>
                    </div>
                </div>
                <div className={styles.socialContent}>
                    <div className={styles.statistics_section}>
                        <p className={styles.statistics_heading}>احصائيات المتابعين</p>
                        <div className={styles.circle}>
                            <div className={`${styles.inne_circle}`}>
                                <p className={styles.circle_text}>70%</p>
                            </div>

                            <p className={styles.percentage}>تزداد بنسبة %70</p>
                        </div>
                    </div>
                    <div className={styles.social_cards}>
                        <Card />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Eltwasole;
