import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="linked-in">
                <a href="https://www.linkedin.com/in/misuzu-taniguchi/"><img src="" alt="LinkedIn" /></a>
            </div>
            <div className="github">
                <a href="https://github.com/Miryeong1235"><img src="" alt="GitHub" /></a>
            </div>
            <div className="email">
                <a href="mailto:mtaniguchi3@my.bcit.ca"><img src="" alt="Email" /></a>
            </div>
        </div>
    );
}

export default Contact;
