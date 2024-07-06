import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import styles from './Portfolio.module.css';

function Cards({ cardInfo, avatar, cardLinks }) {
    const iconMap = {
        LinkedIn: faLinkedin,
        Facebook: faFacebook
    };

    return (
        <section className={`${styles.cards} py-5`}>
            <div className={`container`}>
                <div className={`row align-items-center justify-content-center py-5`}>
                    <div className={`col-md-6 col-sm-12 d-flex flex-column align-items-center`}>
                        <div className={`${styles.card}`}>
                            <div className={styles.cardInfo}>
                                <span>
                                    <div className={styles.avatar}>
                                        <img src={avatar} alt="YourPhoto" className={`img-fluid`} />
                                    </div>
                                </span>
                                <p>{cardInfo}</p>
                            </div>
                            <ul className={styles.cardLinks}>
                                {cardLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} target='blank'>
                                            <FontAwesomeIcon className={`${styles.icon}`} icon={iconMap[link.text]} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;

