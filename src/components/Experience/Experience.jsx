import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Category1 from "../../img/category1.png";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="i-itu">
          <img src={Category1} alt="" />
      </div>
    </div>
  );
};

export default Experience;
