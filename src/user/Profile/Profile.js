import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown, faCommentDots, faCubesStacked, faEnvelope, faScroll, faSignature, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./profile.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
    const { userId } = useAuth();
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        if (userId) {
            fetch(`https://gradprojectapp.runasp.net/api/User/DashBoard/${userId}`)
                .then(res => res.json())
                .then(data => setProfileInfo(data))
                .catch(err => console.error("Error fetching profile data:", err));
        }
    }, [userId]);

    return (
        <section className={`${styles.Profile} py-5`}>
            <div className={`${styles.container} container shadow`}>
                <div className="row">
                    <div className="col-md-3 col-sm-9">
                        <img src={profileInfo.imageFile || "/imges/defaultImage.png"} alt="YourPhoto" className={`${styles.cardImg}`} />
                    </div>
                    <div className="col-md-3 col-sm-9">
                        <div className={`${styles.card}`}>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faUser} /> {profileInfo.name}
                            </p>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faEnvelope} /> {profileInfo.email}
                            </p>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faSignature} /> {profileInfo.userName}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-9">
                        <div className={`${styles.card}`}>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faArrowsUpDown} /> المرحلة
                            </p>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faCubesStacked} /> الصف
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-9">
                        <div className={`${styles.card}`}>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faCommentDots} /> الترم
                            </p>
                            <p className={`${styles.textTitle}`}>
                                <FontAwesomeIcon icon={faScroll} /> المادة
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className={`${styles.button}`}>
                <FontAwesomeIcon icon={faGear} className={`${styles.icon}`} />
            </button> */}
        </section>
    );
}

export default Profile;
