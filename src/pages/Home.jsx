import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
return (
<div className="home-container col-xxl-8 px-4 py-5 container-fluid">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="/Zinhle's_portrait.jpg" className="d-block mx-auto img-fluid" alt="A portrait of Zinhle" width="400" height="160" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-light">Hi, I am Zinhle Nhlapo. A Full-stack Developer, Web Developer and Software Developer.</h1>
        <p className="lead">I'm a 26-year-old full-stack developer who recently completed her studies and is ready to make a meaningful impact in the tech world. I'm passionate about building intuitive, user-centered digital experiences and contributing to projects that drive positive change. With a strong sense of ambition and a commitment to continuous learning, I aim to bring fresh energy, creativity, and purpose to every team I join. When I'm not coding, you'll find me outdoors, recharging on a scenic hike and connecting with nature — it's my favorite way to find inspiration and balance.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{marginLeft: "240px", marginTop: "5px"}} onClick={() => window.location.href = "mailto:zinhle.nhlapo31@gmail.com"}>Contact Me</button>
        </div>
      </div>
    </div>

    <div className="container px-4 py-5" id="about">
        <h2 className="text-white">About Me</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
      <div className="col d-flex align-items-start">
        <i className="bi bi-person  text-primary" style={{fontSize: "35px"}}></i>
        <div id="projects">
          <h3 className="text-white fs-2">Meet the Developer</h3>
          <p className="text-white"> Learn more about my journey into full-stack development, what drives me, and how I blend creativity with code.</p>
          <Link to="about" class="btn btn-outline-primary">
            Learn more
          </Link>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i class="bi bi-tools text-primary" style={{fontSize: "30px"}}></i>
        <div>
          <h3 className="fs-2 text-white">See My Work</h3>
          <p className="text-white">Check out some of the projects I've built, each one tackling real-world problems with creative solutions.</p>
          <Link to="/projects" class="btn btn-outline-primary">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div id="contact">
<Contact/>
</div>
  </div>
  )
}
export default Home;