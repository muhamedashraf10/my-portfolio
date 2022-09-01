import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const SocialHeader = () => {
  return (
    <div className="social_header">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="http://gmail.com" target="_blank">
        <GrMail />
      </a>
    </div>
  );
};

export default SocialHeader;
