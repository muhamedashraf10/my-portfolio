import React from "react";
import "./About.css";
import Me from "../../image/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </div>
            <div className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>36 WorldWide</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ Project Completed</small>
            </div>
          </div>
          <p>
            I have experience in Web Development (Front-End) and Cross Platform
            mobile development using technologies (Html5,CSS3,
            Bootstrap,Tailwind CSS, SASS, JavaScript, ECMAScript, Responsive web
            design, Git/GitHub, Version Control,Node Js, Express Js, Restfull
            API, Unit Testing, FireBase, Redux, React-Redux, ReduxToolkit, React
            JS, React Hooks, Next JS and React Native). I have the confidence to
            teach myself any new skill I learn Next Js, React Native, Redux,
            Tailwind Css, Material UI, Bootstrap, Use Form Hook and NodeJS from
            their Documentation.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
