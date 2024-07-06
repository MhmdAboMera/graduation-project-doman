import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./FeedBack.css";
import { useAuth } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const FeedBack = () => {
    const { userId } = useAuth();
    const [feedbacks, setFeedbacks] = useState([]);
    const [message, setMessage] = useState("");
    const [rate, setRate] = useState("");
    const { isLoggedIn } = useAuth();

    const numberOfFeedbacks = feedbacks.length;

    let totalRating = 0;
    feedbacks.forEach((feedback) => {
        totalRating += parseInt(feedback.rate, 10);
    });
    const averageRating = totalRating / (feedbacks.length || 1);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleRateChange = (newRate) => {
        setRate(newRate);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoggedIn) {
            e.preventDefault();
        } else {
            Swal.fire({
                title: "سجل دخولك اولا",
                confirmButtonText: "حسنا ",
            })
        }

        try {
            const response = await Axios.post('http://gradprojectapp.runasp.net/api/FeedBack', {
                message,
                rate,
                userId,
            });

            console.log('Response:', response);

            setMessage('');
            setRate('');
            getFeedbacks();
        } catch (error) {
            if (error.response) {
                console.error('Error submitting feedback:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    const getFeedbacks = () => {
        fetch("http://gradprojectapp.runasp.net/api/FeedBack")
            .then((res) => res.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error("Error fetching feedbacks:", error));
    };

    useEffect(() => {
        getFeedbacks();
    }, []);

    const renderStars = () => {
        const fullStars = Math.floor(averageRating);
        const hasHalfStar = averageRating - fullStars >= 0.5;

        return [...Array(5)].map((_, index) => {
            if (index < fullStars) {
                return <span key={index} className="star filled">★</span>;
            } else if (index === fullStars && hasHalfStar) {
                return <span key={index} className="star half-filled">★</span>;
            } else {
                return <span key={index} className="star">★</span>;
            }
        });
    };

    return (
        <section className="dataSheet mt-md-3 overflow-hidden pt-5">
            <div className="container">
                <div className="d-flex align-items-center pb-5">
                    <div className="heding">
                        <div className="box-info d-flex align-items-center">
                            <div className="line"></div>
                            <div className="box">
                                <div className="contant">
                                    <div className="sqr"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fs-2 heed">رأي الطالب</div>
                </div>
                <div className="row cuxtom justify-content-between align-items-center">
                    <div
                        className="col-sm-12 col-lg-4 mt-4 mt-lg-0 p-2 rounded-3 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="title contact-form p-2">
                            <form
                                onSubmit={handleSubmit}
                                className="justify-content-center text-center m-0"
                                id="contact-form"
                            >
                                <h3 className="head">قيم منصتنا</h3>
                                <div className="my-3">
                                    <div className="row rating">
                                        {[...Array(5)].map((_, index) => (
                                            <span
                                                key={index}
                                                className={index < rate ? 'star filled' : 'star'}
                                                onClick={() => handleRateChange(index + 1)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="رأيك"
                                        name="message"
                                        value={message}
                                        onChange={handleMessageChange}
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col-12 mt-2 text-start d-flex align-items-center">
                                    <button className="button" type="submit">
                                        <div className="button__int">
                                            <span className="button__span">ارسال</span>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-md-8 px-sm-5 px-md-5"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="d-flex align-items-center">
                            <div className="heding">
                                <div className="box-info d-flex align-items-center">
                                    <div className="line"></div>
                                    <div className="box">
                                        <div className="contant">
                                            <div className="sqr"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fs-4 heed">
                                {" "}
                                التقييم العام{" "}
                                <span className="fw-bold">
                                    {" "}
                                    {averageRating ? averageRating.toFixed(2) : null}
                                </span>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="box w-full mt-3">
                                <div className="rating2">
                                    {renderStars()}
                                </div>
                                <div className="allover">
                                    بناءا على {numberOfFeedbacks} تقييم{" "}
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 mt-3">
                                <div className="row">
                                    <div className="reating-info">
                                        <div className="d-flex align-items-center ">
                                            <div className="heding">
                                                <div className="box-info d-flex align-items-center">
                                                    <div className="line"></div>
                                                    <div className="box">
                                                        <div className="contant">
                                                            <div className="sqr "></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fs-4 heed ">الاراء</div>
                                        </div>
                                        <div className="row">
                                            <div
                                                id="carouselExampleCaptions"
                                                className="owl-carousel carousel carousel11"
                                                data-bs-ride="carousel"
                                            >
                                                <div className="item">
                                                    <div className=" box-prson-reating">
                                                        <div className="box d-flex align-items-center mt-3">
                                                            <div className="carousel-inner">
                                                                {feedbacks.map((feedback, index) => (
                                                                    <div
                                                                        key={feedback.id}
                                                                        className={`carousel-item ${index === 0 ? "active" : ""
                                                                            }`}
                                                                        data-bs-interval="3000"
                                                                    >
                                                                        <div className="d-flex align-items-start">
                                                                            <img
                                                                                src={feedback.imageFile || "/imges/defaultImage.png"}
                                                                                alt=" يلا نتعلم"
                                                                                title="يلا نتعلم"
                                                                                className="Userimg"
                                                                                style={{
                                                                                    width: '50px',
                                                                                    height: '50px',
                                                                                    borderRadius: '50%',
                                                                                    objectFit: 'cover',
                                                                                    display: 'block',
                                                                                    marginLeft: '10px'
                                                                                }}
                                                                            />
                                                                            <div>
                                                                                <p className="name">{feedback.userName}</p>
                                                                                <div className="date">
                                                                                    {feedback.createdAt}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rating22">
                                                                            {[...Array(5)].map((_, index) => (
                                                                                <span key={index} className={index < feedback.rate ? "star filled" : "star"}>★</span>
                                                                            ))}
                                                                        </div>
                                                                        <p className={"comment"}>
                                                                            {feedback.message}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;
