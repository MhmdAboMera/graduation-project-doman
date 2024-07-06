import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Assistant.module.css";

function Assistant() {
    const [messages, setMessages] = useState([
        { text: "اهلا بيك ! اقدر اساعدك ازاي؟", sender: "bot" }
    ]);

    const [options, setOptions] = useState([
        { text: "الرئيسية", value: "/" },
        { text: "من نحن", value: "/about" },
        { text: "تواصل معنا", value: "/Contact" },
        { text: "المراحل التعليمية", value: "/eduPhases" },
        // { text: "تسجيل الدخول", value: "/UserLogin" },
        { text: "سياسة الخصوصية", value: "/Policy" },
        { text: "الملف الشخصي", value: "/Profile" }
    ]);

    const chatContainerRef = useRef(null);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        const userMessage = { text: option.text, sender: "user" };
        const botMessage = { text: option.value, sender: "bot" };

        setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
        navigate(option.value);  // Navigate to the route associated with the option
    };

    useEffect(() => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    return (
        <section className={`${styles.Assistant}`}>
            <div className={`container`}>
                <div className={`${styles.media} shadow`}>
                    <div><img src="/imges/chatbot.png" className={`${styles.chatImg}`} alt="Chatbot" /></div>
                    <div>
                        <h5>مساعد</h5>
                        <span className={`${styles.title}`}>متصل</span>
                    </div>
                </div>
                <div ref={chatContainerRef} className={`box-content overflow-auto shadow ${styles.chatContainer}`}>
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === "bot" ? styles.botMessage : styles.userMessage}>
                            <div className={styles.messageText}>
                                <b>{message.sender === "bot" ? "المساعد" : "انت"}:</b> {message.text}
                            </div>
                        </div>
                    ))}
                    <div className={`${styles.options}`}>
                        {options.map((option, index) => (
                            <button className={`${styles.optionsButton}`} key={index} onClick={() => handleOptionClick(option)}>
                                {option.text}
                            </button>
                        ))}
                    </div>
                    {/* <div className={`${styles.inputGroup}`}>
                        <input id="textbox" type="text" className={`${styles.formControl}`} />
                        <div className="input-group-append">
                            <button id="sendBtn" type="button" className="btn btn-primary shadow" title="send">
                                <FontAwesomeIcon className={`${styles.i}`} icon={faArrowRightToBracket} />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Assistant;
