/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './links.module.css'
import React from 'react';
function Links() {
    return (
        <div className="container">
            <section className={`${styles.Homenavbar}`}>
                <ul className={`${styles.Homenavbar_list}`}>
                    <div className={`col-md-3 col-sm-6 py-3`}>
                        <li className= {`${styles.Homenavbar_item}`}>
                            <p className={`${styles.Homenavbar_link}`}>فيديوهات</p>
                        </li>
                    </div>
                    <div className={`col-md-3 col-sm-6 py-3`}>
                        <li className={`${styles.Homenavbar_item}`}>
                            <p className={`${styles.Homenavbar_link}`}>كتب </p>
                        </li>
                    </div>
                    <div className={`col-md-3 col-sm-6 py-3`}>
                        <li className={`${styles.Homenavbar_item}`} >
                            <p className={`${styles.Homenavbar_link}`}>حل اسئلة  </p>
                        </li>
                    </div>
                    <div className={`col-md-3 col-sm-6 py-3`}>
                        <li className={`${styles.Homenavbar_item}`} >
                            <p className={`${styles.Homenavbar_link}`}>مراجعات </p>
                        </li>
                    </div>
                </ul> 
            </section>
        </div>

    )
}


export default Links;