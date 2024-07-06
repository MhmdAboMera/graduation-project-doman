import React from 'react';
import styles from './section.module.css';

function SectionUnderLinks() {
    return (
        <section className={`${styles.sectionlearning}`}>
            <div className={`${styles.Section} container`}>
                <p className={`${styles.paragraph}`}>
                    يوجد طرق متنوعة لتلقي المعلومات مما يزيد من القدرة الاستعابية للطالب وطريقه فهمه لمحتوي الشرح ويوجد امتحانات واسئله متنوعة .
                </p>
            </div>
        </section>
    )
}

export default SectionUnderLinks;
