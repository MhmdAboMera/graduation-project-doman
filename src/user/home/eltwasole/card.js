import React from 'react';
import styles from './card.module.css'; 
import faceBook from '../../../images/download 4.png';
import google from '../../../images/google.png';
import insta from '../../../images/insta.jpg';
import twitter from '../../../images/twitter.png';

function Card() {
  return (
    <div className={styles.social_cards_container}>
      <div className={styles.social_card_pair}>
        <div className={styles.social_card}>
          <img src={faceBook} alt="Facebook" />
          <div className={styles.text_container}>
            <p>30000</p>
            <p>متابع</p>
          </div>
        </div>
        <div className={styles.social_card} style={{backgroundColor:'white'}}>
          <img src={google} alt="Google" />
          <div className={styles.text_container}>
            <p style={{color:'#1EB1F0'}}>30000</p>
            <p style={{color:'#1EB1F0'}}>متابع</p>
          </div>
        </div>
      </div>
      <div className={styles.social_card_pair} >
      <div className={styles.social_card} style={{backgroundColor:'white'}}>
          <img src={insta} alt="Instagram" />
          <div className={styles.text_container}>
            <p style={{color:'#1EB1F0'}}>30000</p>
            <p style={{color:'#1EB1F0'}}>متابع</p>
          </div>
        </div>
        <div className={styles.social_card} style={{backgroundColor:'#1EB1F0'}}>
          <img src={twitter} alt="Twitter" />
          <div className={styles.text_container}>
            <p>30000</p>
            <p>متابع</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
