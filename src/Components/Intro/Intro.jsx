import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesemoji.png";
import Photo from "../../img/photo.png";
import {themeContext} from '../../Context';
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}} >Hi! I Am</span>
          <span>Jude Ndubuisi</span>
          <span>
          Frontend Developer | React | JavaScript | Python Enthusiast | Focused on Building One Solution At A Time Using Code.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
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
          <a href="https://www.instagram.com/judevector/">
            <InstagramIcon style={{ fontSize: 100, color: "var(--green)" }} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Photo} alt="" />
        <img src={glassesemoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: '18rem', left: '0rem'}}>
            <FloatingDiv image={thumbup} txt1="Best Design" txt2="100%" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}} ></div>
        <div className="blur second-blur" style={{background: "#C1F5FF" }} ></div>
      </div>
    </div>
  );
};

export default Intro;
