import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import {themeContext} from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
import JudeCV from "./JudeCV.pdf";


const Services = () => {
  const transition = {duration: 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="services" id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Am someone who has eyes for details in everything i do,
          <br /> and is willing to give my all to deliver in any task, am a team
          <br /> player and can also work on projects alone if need be, <br /> I
          love learning new things everyday, one thing is I never say NEVER.
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
          initial={{left: '25rem'}}
          whileInView={{left: '14rem'}}
          transition={transition}

        
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React, Python, NodeJs"}
          />
        </div>
        {/* third card */}
        <motion.div
        initial={{left: '35rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        
         style={{ top: '19rem', left: '12rem'}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Beautiful Design guarrenteed anyday, Always willing to deliver top notch designs"}
             />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>
      </div>
    </div>
  );
};

export default Services;
