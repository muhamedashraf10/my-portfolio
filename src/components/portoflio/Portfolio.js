import React from "react";
import "./Portfolio.css";

import img1 from "../../image/portfolio1.jpg";
import img2 from "../../image/portfolio2.jpg";
import img3 from "../../image/portfolio3.jpg";
import img4 from "../../image/portfolio4.jpg";
import img5 from "../../image/portfolio5.png";
import img6 from "../../image/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      name: "Ecommerce | Web Application",
      image: img1,
      linkGit: "",
      demo: "",
    },
    {
      name: "Blog | Web Application",
      image: img2,
      linkGit: "",
      demo: "",
    },
    {
      name: "Ecommerce | Mobile Application",
      image: img3,
      linkGit: "",
      demo: "",
    },
    {
      name: "Examination System | Web Application",
      image: img4,
      linkGit: "",
      demo: "",
    },
    {
      name: "Admin Panel | CRUD",
      image: img5,
      linkGit: "",
      demo: "",
    },
    {
      name: "Portfolio | Web Application",
      image: img6,
      linkGit: "",
      demo: "",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((el, index) => (
          <div className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={el.image} alt="" />
            </div>
            <h3>{el.name}</h3>
            <div className="portfolio__item-cta">
              <a href="" className="btn" target="_blank">
                GitHub
              </a>
              <a href="" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
