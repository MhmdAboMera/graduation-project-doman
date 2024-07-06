import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function UserLogin({ setActiveTab }) {  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsLoggedIn, setUserId } = useAuth(); 
  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const checkLoginTrue = (username, userId) => {
    Swal.fire({
      title: `تم تسجيل دخولك بنجاح... مرحبا بك ${username}`,
      confirmButtonText: "حسنا"
    })
    .then(() => {
      setIsLoggedIn(true);
      setUserId(userId); 
      navigate("/home");
    });
  };

  const checkLoginFalse = () => {
    Swal.fire({
      title: "البريد الالكتروني غير صحيح او كلمة السر غير صحيحة",
      confirmButtonText: "حسنا"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://gradprojectapp.runasp.net/api/Auth/token",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { username, userId } = response.data; // Assuming API response includes userId
      checkLoginTrue(username, userId);

      setEmail("");
      setPassword("");
      console.log("response", response);

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("البريد الالكتروني غير صحيح او كلمة السر غير صحيحة");
        checkLoginFalse();
      } else {
        setErrorMsg("حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.");
      }
    }
  };

  return (
    <section className={`${styles.Login}`}>
      <div className={`${styles.container} container py-3`}>
        <form
          method="post"
          className={`${styles.loginForm} needs-validation formDisplay`}
          noValidate
          onSubmit={handleSubmit}
        >
          <h3 className={`${styles.title} text-center`}>سجل في يلا نتعلم !</h3>
          <div className={`${styles.formGroup} mb-3 w-100`}>
            <input
              type="text"
              name="emailOrUser"
              onChange={handleEmailChange}
              value={email}
              className={`${styles.input} w-100`}
              required
              autoComplete="off"
              placeholder=""
            />
            <label className={`label ${email ? `${styles.active}` : ""}`}>
              البريد الالكتروني
            </label>
            <span className={styles.bar}></span>
          </div>
          <div className={`${styles.formGroup} mb-3 w-100`}>
            <input
              type="password"
              name="password"
              className={`${styles.input} w-100`}
              required
              onChange={handlePasswordChange}
              value={password}
              autoComplete="current-password"
              placeholder=""
            />
            <label className={`label ${password ? `${styles.active}` : ""}`}>
              كلمة السر
            </label>
            <span className={styles.bar}></span>
          </div>
          <div className={`${styles.checkbox} checkbox`}>
            <Link
              className={`${styles.forgotPassword}`}
              onClick={() => setActiveTab(1)}  // Change the active tab to "Registration"
            >
              ليس لديك حساب؟
              <span className={`${styles.tooltip}`}>سجل الان</span>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className={`${styles.LoginBtn} btn login-btn bold`}
            >
              تسجيل الدخول
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UserLogin;
