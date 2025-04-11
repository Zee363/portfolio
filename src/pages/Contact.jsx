import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div className="contact-container container-fluid">
            <h2 className="text-white">Get in touch!</h2>
            <p>Feel free to reach out if you'd like to collaborate, work together, or just have a chat about tech and the outdoors!<br/>
            <i class="bi bi-telephone" style={{fontSize: "20px"}}></i> : +27607900151 <br/>
            <i class="bi bi-envelope" style={{fontSize: "20px"}}></i> : zinhle.nhlapo31@gmail.com
            </p>
            <div className="socials d-flex">
                <a href="https://www.linkedin.com/in/nhlapo/"><i class="bi bi-linkedin" target="_blank" rel="noopener noreferrer" style={{fontSize: "35px"}}></i></a>
                <a href="https://github.com/Zee363"><i class="bi bi-github" target="_blank" rel="noopener noreferrer" style={{fontSize: "35px"}}></i></a>
            </div>
        </div>
    )
}

export default Contact;