import React from "react";
import cv from "../../image/Muhamed_Ashraf_Cv.pdf";
const CV = () => {
  return (
    <div className="cv">
      <a href={cv} download className="btn">
        Download Cv
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CV;
