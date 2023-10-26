import React, { useContext } from "react";
import "./Intro.css";
import icon from "../../img/icon.png";
import musik from "../../img/musik.png";
import Sponsor from "../../img/sponsor.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* Untuk mengubah mode dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>MEDIA PLATFORM <br/>
          FOR{" "}</span>
          <span style={{ color: darkMode ? "white" : "" }}>MUSICIANS, <br/>
          &nbsp;&nbsp;&nbsp;&nbsp; SONGWRITERS &amp;
          <br />
          PRODUCERS</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Join the community {">"}</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Sponsor} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" /> */}
        {/* <img src={Vector2} alt="" /> */}
        <img src={icon} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={musik}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
