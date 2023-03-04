import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import JudeCV from "./JudeCV.pdf";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          As a backend developer, I have a keen eye for detail and am dedicated{" "}
          <br />
          to delivering high-quality work on every task. I am a collaborative{" "}
          <br />
          team player, but I'm also comfortable working independently when{" "}
          <br />
          needed. I'm always eager to learn and stay up-to-date with the latest{" "}
          <br />
          technologies and industry trends. When faced with a challenge, I never{" "}
          <br />
          give up and always strive for success.
        </span>
        <br />
        <a href={JudeCV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Technical Writer"}
            detail={"Medium, DevTo, Hashnode"}
          />
        </motion.div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Backend Developer"}
            detail={"HTML, CSS, Python, React, Django, Javascript"}
          />
        </div>
        {/* third card */}
        <motion.div
          initial={{ left: "35rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"System Designs"}
            detail={
              "Always willing to deliver top notch APIs, Integrating systems and architecting databases."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
