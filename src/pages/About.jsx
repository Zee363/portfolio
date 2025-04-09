import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-container container-fluid">
            <h1 className="text-white">About Zinhle</h1>
            <img src="/Zinhle's_portrait.jpg" alt="A portrait of Zinhle" class="d-block mx-auto img-fluid" width="400" height="160" loading="lazy"/>
            <p className="text-white first-p">I am driven by a passion for creating intuitive, user-focused digital solutions and enjoy working on projects that make a real difference. With a deep curiosity and a commitment to growth, I bring energy, creativity, and purpose to every team I'm part of.</p>
            <p className="text-white">I have a strong interest in health technology and am deeply passionate about creating innovative digital solutions that improve the patient experience in healthcare environments. I believe that technology has the power to transform the way patients interact with the healthcare system — making their journeys more seamless, informed, and compassionate.</p>
            <p className="text-white">My focus lies in building systems that not only support medical staff but also empower patients — whether it’s through applications that assist with medication tracking, appointment scheduling, or platforms that provide easier access to health information. I am especially motivated by the opportunity to design tools that ease the stress and uncertainty that often accompany hospital visits.</p>
            <p className="text-white">By combining my technical skills with a human-centered approach, I aim to contribute to solutions that make a tangible, positive impact on patients' lives. I’m committed to continuous learning and collaboration, and I look forward to working on projects that push boundaries and bring meaningful change to the healthcare sector.</p>
                   
             </div>
    )
}

export default About;