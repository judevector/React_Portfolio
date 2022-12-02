import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";


const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Am someone who has eyes for details in everything i do,
          <br /> and is willing to give my all to deliver in any task, am a team
          <br /> player and can also work on projects alone if need be, <br /> I
          love learning new things everyday, one thing is I never say NEVER.
        </span>
        <br />
        <a href="" download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React, Python"}
          />
        </div>
        {/* third card */}
        <div style={{ top: '19rem', left: '12rem'}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Beautiful Design guarrenteed anyday"}
             />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>
      </div>
    </div>
  );
};

export default Services;
