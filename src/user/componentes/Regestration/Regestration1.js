import React, { useRef, useState } from 'react';
import axios from 'axios';
import styles from './Regestration.module.css';
import Swal from 'sweetalert2';

const Registration = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageFile, setImageFile] = useState(null); // Changed to null
    const [errorMessage, setErrorMessage] = useState("");

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const userNameInput = useRef();
    const emailInput = useRef();
    const PasswordInput = useRef();
    const confirmPasswordInput = useRef();
    const imageFileInput = useRef();

    const checkRegTrue = (data) => {
        Swal.fire({
            title: `تم تسجيل دخولك بنجاح... مرحبا بك ${data}`,
        });
    };

    const checkRegFalse = () => {
        Swal.fire({
            title: "البريد الالكتروني غير صحيح او كلمة السر غير صحيحة",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        if (!FirstName || !LastName || !Username || !Email || !Password || !confirmPassword || !imageFile) {
            setErrorMessage("يجب تعبئة جميع الحقول.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            setErrorMessage("البريد الإلكتروني غير صالح.");
            return;
        }

        // Validate password strength
        if (Password.length < 8) {
            setErrorMessage("كلمة المرور يجب أن تكون 8 أحرف على الأقل.");
            return;
        }

        // Check if passwords match
        if (Password !== confirmPassword) {
            setErrorMessage("كلمة المرور غير متطابقة.");
            return;
        }

        // Validate image file type
        const validImageTypes = ['image/png', 'image/gif', 'image/jpeg'];
        if (!validImageTypes.includes(imageFile.type)) {
            setErrorMessage("نوع الملف يجب أن يكون PNG أو GIF أو JPEG.");
            return;
        }

        const formData = new FormData();
        formData.append("FirstName", FirstName);
        formData.append("LastName", LastName);
        formData.append("Username", Username);
        formData.append("Email", Email);
        formData.append("Password", Password);
        formData.append("imageFile", imageFile);

        try {
            const response = await axios.post(
                `http://gradprojectapp.runasp.net/api/Auth/register`,
                formData
            );
            checkRegTrue(response.data.username);

            // Clear form fields
            setFirstName("");
            setLastName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setImageFile(null);
            firstNameInput.current.value = "";
            lastNameInput.current.value = "";
            userNameInput.current.value = "";
            emailInput.current.value = "";
            PasswordInput.current.value = "";
            confirmPasswordInput.current.value = "";
            imageFileInput.current.value = "";
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("حدث خطأ أثناء التسجيل. حاول مرة اخرى.");
            checkRegFalse();
        }
    };

    return (
        <section className={`${styles.Registration} py-3`}>
            <div className="container py-3">
                <form className={`${styles.registerForm} needs-validation`} noValidate onSubmit={handleSubmit}>
                    <h3 className={`${styles.title} text-center`}>جديد في يلا نتعلم !</h3>
                    {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
                    <div className="row m-0">
                        <div className="col-sm-6">
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    id="firstName"
                                    required
                                    name="FirstName"
                                    autoComplete='off'
                                    className={`${styles.formControl} form-control`}
                                    placeholder=" "
                                    ref={firstNameInput}
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <label htmlFor='firstName' className={`label ${FirstName ? styles.active : ''} form-label`}>الاسم الأول</label>
                                <span className={styles.bar}></span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    id="lastName"
                                    required
                                    name="LastName"
                                    autoComplete='off'
                                    className={`${styles.formControl} form-control`}
                                    placeholder=" "
                                    ref={lastNameInput}
                                    value={LastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <label className={`${LastName ? styles.active : ''} form-label`}>الاسم الأخير</label>
                                <span className={styles.bar}></span>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-sm-9">
                            <div className={`${styles.formGroup}`}>
                                <input
                                    type="text"
                                    id="userName"
                                    required
                                    name="Username"
                                    autoComplete='off'
                                    className={`${styles.formControl} form-control`}
                                    placeholder=" "
                                    ref={userNameInput}
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label className={`${Username ? styles.active : ''}`}>اسم المستخدم</label>
                                <span className={styles.bar}></span>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className={`${styles.formGroup}`}>
                                <input
                                    ref={imageFileInput}
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                    placeholder="الصورة"
                                    type="file"
                                    name="PersonalImage"
                                    accept="image/png, image/gif, image/jpeg"
                                    style={{ display: 'none' }}
                                    className={`${styles.formControl} form-control`}
                                />
                                <ul className={styles.ul}>
                                    <li style={{ '--i': '#a9cbff', '--j': '#345df4' }}
                                        tabIndex="0"
                                        className={styles.li}
                                        onClick={() => imageFileInput.current.click()}
                                    >
                                        <span className={`${styles.icon}`}>📷</span>
                                        <span className={`${styles.imgtitle}`}>الصورة الشخصية</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formGroup}`}>
                        <input
                            type="email"
                            id="email"
                            required
                            name="Email"
                            autoComplete='off'
                            className={`${styles.formControl} form-control`}
                            placeholder=" "
                            ref={emailInput}
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={`${Email ? styles.active : ''}`}>البريد الإلكتروني</label>
                        <span className={styles.bar}></span>
                    </div>

                    <div className={`${styles.formGroup}`}>
                        <input
                            type="password"
                            required
                            name="Password"
                            autoComplete="new-password"
                            className={`${styles.formControl} form-control ${styles.password1}`}
                            placeholder=" "
                            ref={PasswordInput}
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className={`${Password ? styles.active : ''}`}>كلمة السر</label>
                        <span className={styles.bar}></span>
                    </div>
                    <div className={`${styles.formGroup}`}>
                        <input
                            type="password"
                            className={`${styles.formControl} form-control ${styles.password2}`}
                            required
                            autoComplete="off"
                            placeholder=" "
                            ref={confirmPasswordInput}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label className={`${confirmPassword ? styles.active : ''}`}>أعد كتابه كلمه السر</label>
                        <span className={styles.bar}></span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className={`${styles.SignUp} btn login-btn px-5 bold`} type="submit">سجل</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;
