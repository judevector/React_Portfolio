import React from 'react'
import './Works.css'
import Python from '../../img/python-logo.png'
import ReactLogo from '../../img/react-logo.png'
import NodeJs from '../../img/nodejs-logo.png'
import Javascript from '../../img/javascript-logo.png'
import MongoDB from '../../img/mongodb-logo.png'


const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
        <span>Tech Stacks Used</span>
        <span>Frontend & Backend</span>
        <span>
          Am someone who has eyes for details in everything i do,
          <br /> and is willing to give my all to deliver in any task, am a team
          <br /> player and can also work on projects alone if need be, <br /> I
          love learning new things everyday, one thing is I never say NEVER.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Python} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={MongoDB}  alt="" />
            </div>
            <div className="w-secCircle">
                <img src={ReactLogo}  alt="" />
            </div>
            <div className="w-secCircle">
                <img src={NodeJs}  alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Javascript} alt="" />
            </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>

  )
}

export default Works