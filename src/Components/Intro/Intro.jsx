import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesemoji.png";
import Photo from "../../img/photo.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Jude Ndubuisi</span>
          <span>
            Backend Developer | A regular dude breaking into Tech ✌️ | Technical
            Writer ✍️ | Web3 | Focused on building one solution at a time using
            Code.
          </span>
        </div>
        <a href="mailto:ikechukwujudendubuisi@gmail.com">
          <button className="button i-button">Hire Me</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/CodeJude">
            <GitHubIcon style={{ fontSize: 100, color: "var(--green)" }} />
          </a>
          <a href="https://twitter.com/JudeVector">
            <TwitterIcon style={{ fontSize: 100, color: "var(--green)" }} />
          </a>
          <a href="https://www.linkedin.com/in/judendubuisi/">
            <LinkedInIcon style={{ fontSize: 100, color: "var(--green)" }} />
          </a>
          <a href="mailto:ikechukwujudendubuisi@gmail.com">
            <AlternateEmailIcon
              style={{ fontSize: 100, color: "var(--green)" }}
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Photo} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Backend" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Technical" txt2="Writer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur second-blur"
          style={{ background: "#C1F5FF" }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
