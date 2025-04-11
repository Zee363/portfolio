import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

const Projects = () => {
    return (
    <div className="projects-container container-fluid">
    <h1 className="text-white">Projects</h1>
    <p className="text-white first-p">These are some of the projects I have had the opportunity to work on. They have helped me hone my skills and become a  better developer.  </p>
        
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h4 className="text-white">Frontend Development</h4>
        <h5 className="card-title text-white">E-commerce Store</h5>
        <hr className="text-white" />
        <p className="card-text text-white">I contributed to the development of a collaborative project designed to showcase our frontend skills using React. This experience emphasized teamwork, version control, and component-based architecture, while allowing us to apply core principles of modern frontend development in a practical setting.</p> <br />
      <h6 className="text-white">React | JavaScript | Figma</h6>
      </div>
      <div className="card-footer text-white">
      <button className="project-button"><Link to="https://ma-e-commerce-store.netlify.app/" target="-blank" rel="noopener noreferrer">View Project</Link></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h4 className="text-white">Full-stack Development</h4>
        <h5 className="card-title text-white">Blog</h5>
        <hr className="text-white"/>
        <p className="card-text text-white">I developed a blog platform as part of a project that introduced key concepts in databases, backend development, and middleware integration. This experience provided hands-on exposure to building full-stack applications, including data modeling, server-side logic, and the flow of data between the frontend and backend.</p> <br />
        <h6 className="text-white">React | MySQL | Node.js | Express.js</h6>
      </div>
      <div className="card-footer">
      <button className="project-button"><Link to="https://haut-aesthetics20-zee363s-projects.vercel.app/" target="-blank" rel="noopener noreferrer">View Project</Link></button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h4 className="text-white">Frontend Development</h4>
        <h5 class="card-title text-white">Ticket Station</h5>
        <hr className="text-white"/>
        <p className="card-text text-white">I developed a ticket station application designed to manage and streamline ticket sales efficiently. The project focused on providing a user-friendly interface and robust functionality for handling transactions and tracking ticket availability.</p> <br />
        <br />
        <h6 className="text-white">React | JavaScript | OOP</h6>
      </div>
      <div className="card-footer">
      <button className="project-button"><Link to="https://zee363.github.io/Ticket-station/" target="-blank" rel="noopener noreferrer">View Project</Link></button> 
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Projects;