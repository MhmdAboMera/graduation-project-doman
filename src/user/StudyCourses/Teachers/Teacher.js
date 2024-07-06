import { useRef, useEffect, useState } from "react";
import styles from '../../about/slider/Slider.module.css';

function Teacher(props) {
  const [teachers, setTeachers] = useState([]);

      useEffect(() => {
          getTeachers();
      }, []);
  
      const getTeachers = () => {
          fetch("http://gradprojectapp.runasp.net/api/User/GetAllTeachers")
              .then((res) => res.json())
              .then((data) => setTeachers(data));
      };
  const sliderRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  let scrollInterval = null;

  useEffect(() => {
    const slider = sliderRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handleWheel = (event) => {
      if (event.deltaY < 0) {
        prevButton.click();
      } else {
        nextButton.click();
      }
    };

    slider.addEventListener('wheel', handleWheel);

    startAutoScroll();
    // endAutoScroll();

    return () => {
      slider.removeEventListener('wheel', handleWheel);
      clearInterval(scrollInterval);
    };
  }, []);

  const handlePrevClick = () => {
    const slider = sliderRef.current;
    const scrollAmount = -slider.offsetWidth / 3; 
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth', 
    });
  };

  const handleNextClick = () => {
    const slider = sliderRef.current;
    const scrollAmount = slider.offsetWidth / 4; 
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth', 
    });
  };

  const startAutoScroll = () => {
    scrollInterval = setInterval(() => {
      const slider = sliderRef.current;
      const scrollAmount = -(slider.offsetWidth / 4); 
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' }); 
  
      if (slider.scrollLeft === 0) {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        slider.scrollTo({ left: maxScrollLeft, behavior: 'auto' }); 
      }
    }, 2000);
  };

  return (
    <section className={`${styles.tSliders} py-5`}>
      <div className={`${styles.container} container py-3`}>
        <div className="row justify-content-center">
          <div className={`${styles.sliderContainer} col-md-9 `}>
            <button ref={nextButtonRef} onClick={handleNextClick} className={styles.sliderButton}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className={styles.slider} ref={sliderRef}>
              {teachers.map((teacher, index) => (
                <div key={index} className={`${styles.slide} col-md-9 col-sm-12`}>
                  <img src={teacher.imageFile} alt={teacher.userName} className={styles.imageContainer}/>
                  <p>{teacher.userName}</p>
                  <button className={`${styles.Starting} btn btn-primary shadow`}>ابدأ هنا</button>
                </div>
              ))}
            </div>
            <button ref={prevButtonRef} onClick={handlePrevClick} className={styles.sliderButton}>
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teacher;
