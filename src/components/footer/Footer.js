import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
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
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com">
          <FiGithub />
        </a>
      </div>
      <div className="copy">
        <small>&copy; Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
