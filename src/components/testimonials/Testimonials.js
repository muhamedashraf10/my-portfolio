import React from "react";

import imag1 from "../../image/a.jpg";
import imag2 from "../../image/n.jpg";
import imag3 from "../../image/m.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      title: "Eng.Ahmed Zaghlul",
      image: imag1,
      desc: "Thank you for the effort you made with me. Thank you for helping me to develop. I benefited a lot from you. Thank you for your support. I am happy to know you and I am proud that you are my instructor. Thank you for everything.",
    },
    {
      id: 2,
      image: imag2,
      title: "ITI-Information Technology Institute",
      desc: "At ITI as a trainee, I got some really valuable skills, gained a lot of experience in a short time, studied and practiced a lot of courses and technical skills in a professional way I also worked on improving my personal skills, working under pressure, and many of the skills that I acquired through the training courses provided by the Institute. Thank you very much for developing my skills and transforming me from a beginner to a person with knowledge and experience. Thank you very much to the Information Technology Institute (ITI).",
    },
    {
      id: 3,
      image: imag3,
      title: "FCI",
      desc: "Thank you to the Faculty of Computers and Information because it introduced me to the field of technology and thank you for 4 years of education",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Thank For</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigatio
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map((el, index) => (
          <SwiperSlide className="testimonial" key={el.id}>
            <div className="client__avatar">
              <img src={el.image} alt="" />
            </div>
            <h5 className="client__name">{el.title}</h5>
            <small className="review">{el.desc}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
