import React from "react";
import CV from "./CV";
import "./Header.css";
import me from "../../image/me.jpg";
import SocialHeader from "./SocialHeader";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohamed Ashraf</h1>
        <h5 className="text_light">Web Developer</h5>
        <CV />
        <div className="me">
          <img className="img" src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>

        <SocialHeader />
      </div>
    </header>
  );
};

export default Header;
