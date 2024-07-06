import styles from"./About.module.css";
import Landing from "./landing/Landing";
import Vision from "./vision/Vision";
import Stages from "./stages/Stages";
import Purpose from "./purpose/Purpose";
import Learning from "./learning/Learning";
import Slider from "./slider/Slider";
import FeedBack from "./feedBack/FeedBack";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
      AOS.init({duration:2000});
  }, []);
  return (
    <section className={`${styles.about} py-5`}>
      <Landing />
    <div>
      <div data-aos="zoom-in">
      <Vision />
      </div >
      <div data-aos="zoom-in">
      <Stages />
      </div>
      <div data-aos="zoom-in">
      <Purpose />
      </div>
      <div data-aos="zoom-in">
      <Learning />
      </div>
      <div data-aos="zoom-in">
      <Slider />
      </div>
      <div data-aos="zoom-in">
      <FeedBack />
      </div>
    </div>
    </section>
  );
}
export default About;
