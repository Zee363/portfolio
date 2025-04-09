import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

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
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" style={{marginLeft: "240px", marginTop: "5px" }}>Contact Me</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Home;