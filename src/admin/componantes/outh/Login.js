import { useEffect, useState, useContext } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "./AuthContext";
import { ILogin } from "../../../App";
function Login() {
  // const { login } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const setIsAdmin = useContext(ILogin);
  const checkLoginTrue = (data) => {
    Swal.fire({
      title: ` تم تسجيل دخولك بنجاح... مرحبا بك ${data} `,
    });
  };
  const checkLoginFalse = () => {
    Swal.fire({
      title: `البريد الالكتروني غير صحيح او كلمه السر غير صحيحة`,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://gradprojectapp.runasp.net/api/Auth/token", {
          email,
          password,
        })
        .then((data) => {
          console.log(data);
          if (data.data.roles[1] === "Admin") {
            setIsAdmin(true);
            navigate(`/admin/home`);
            checkLoginTrue(data.data.username);
          } else {
            checkLoginFalse();
          }
        })
        .catch((error) => {
          checkLoginFalse();
          if (error.response) {
            // Server responded with a status other than 200 range
            console.log("Error Response:", error.response.data);
          } else if (error.request) {
            // Request was made but no response received
            console.log("Error Request:", error.request);
          } else {
            // Something else happened while setting up the request
            console.log("Error Message:", error.message);
          }
          console.log("Error Config:", error.config);
        });
      // Handle successful login, e.g., store token, redirect, etc.
      console.log(response.data);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleemail = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {}, []);
  return (
    <section className={`${styles.Login}`}>
      <div className={`${styles.container} container py-3`}>
        {/* <div className="row"> */}
        <form
          onSubmit={handleSubmit}
          method="get"
          className={`${styles.loginForm} needs-validation formDisplay`}
          noValidate
        >
          <h3 className={`${styles.title} text-center`}>سجل في يلا نتعلم !</h3>
          <div className={`${styles.formGroup} mb-3 w-100`}>
            <input
              type="email"
              name="email"
              onChange={handleemail}
              value={email}
              className={`${styles.input} w-100`}
              required
              autoComplete="username"
              placeholder=""
            />
            <label className={`label ${email ? `${styles.active}` : ""}`}>
              {" "}
              البريد الالكتروني
            </label>
            {/* <span className={styles.highlight}></span> */}
            <span className={styles.bar}></span>
            {/* <div className={styles.invalidFeedback}>
                                يرجى ملئ الحقل .
                            </div> */}
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
              {" "}
              كلمة السر
            </label>
            {/* <span className={styles.highlight}></span> */}
            <span className={styles.bar}></span>
            {/* <div className={styles.invalidFeedback}>
                                يرجى ملئ الحقل .
                            </div> */}
          </div>
          <div className={`${styles.checkbox} checkbox`}>
            <button type="button" className={`${styles.forgotPassword} btn`}>
              هل نسيت كلمة السر؟
            </button>
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
        {/* </div> */}
      </div>
    </section>
  );
}
export default Login;
