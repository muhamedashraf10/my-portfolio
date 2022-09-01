import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiGithub, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Portfolio
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="https://www.facebook.com/elmagik.toshka" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/__muhamedashraf/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/muhamed-ashraf-052a64242/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/muhamedashraf10" target="_blank">
          <FiGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCbK_dOMfj1Rbd92BSVKG-Hg"
          target="_blank"
        >
          <FiYoutube />
        </a>
      </div>
      <div className="copy">
        <small>&copy; Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
