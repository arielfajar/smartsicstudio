import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Category from "../../img/category.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Better result audio.</span>
        <span>Mastering like expert.</span>
        <spane>
        Always sound great with the world's leading online mastering service. 
        <br/>
        Developed in collaboration with multi-platinum producers and engineers. 
          <br />
          Super fast, no limits.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Category}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
