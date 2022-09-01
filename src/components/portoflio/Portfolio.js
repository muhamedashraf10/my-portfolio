import React from "react";
import "./Portfolio.css";

import img1 from "../../image/b2.png";
import img2 from "../../image/b1.png";
import img3 from "../../image/portfolio3.jpg";
import img4 from "../../image/1.png";
import img5 from "../../image/portfolio1.jpg";
import img6 from "../../image/b3.png";

const Portfolio = () => {
  const data = [
    {
      name: "Ecommerce | Web Application",
      image: img1,
      linkGit: "https://github.com/muhamedashraf10/ECommerce-By-Using-NEXT-JS",
      demo: "https://ec-ommerce-by-using-next-js.vercel.app/",
    },
    {
      name: "Blog | Web Application",
      image: img2,
      linkGit: "https://github.com/muhamedashraf10/my-blog-reactjs",
      demo: "https://my-blog-reactjs.vercel.app/",
    },
    {
      name: "Ecommerce | Mobile Application",
      image: img3,
      linkGit: "https://github.com/MaSMas0/ITI-Final-Project",
      demo: "https://github.com/MaSMas0/ITI-Final-Project",
    },
    {
      name: "Examination System | WebSite ",
      image: img4,
      linkGit: "https://github.com/muhamedashraf10/Examination-system",
      demo: "https://github.com/muhamedashraf10/Examination-system",
    },
    {
      name: "Admin Panel | CRUD",
      image: img5,
      linkGit: "https://www.youtube.com/watch?v=ZfNk3qIu1lA",
      demo: "https://www.youtube.com/watch?v=ZfNk3qIu1lA",
    },
    {
      name: "Portfolio | Web Application",
      image: img6,
      linkGit: "https://github.com/muhamedashraf10/my-portfolio",
      demo: "https://my-portfolio-neon-six.vercel.app/",
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
              <img className="imgs" src={el.image} alt="" />
            </div>
            <h3>{el.name}</h3>
            <div className="portfolio__item-cta">
              <a href={el.linkGit} className="btn" target="_blank">
                GitHub
              </a>
              <a href={el.demo} className="btn btn-primary" target="_blank">
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
