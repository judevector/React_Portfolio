import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>
          <div className="f-icons">
            <a href="https://github.com/CodeJude">
              <GitHubIcon style={{ fontSize: "3rem", color: "white" }} />
            </a>
            <a href="https://twitter.com/JudeVector">
              <TwitterIcon style={{ fontSize: "3rem", color: "white" }} />
            </a>
            <a href="https://www.linkedin.com/in/judendubuisi/">
              <LinkedInIcon style={{ fontSize: "3rem", color: "white" }} />
            </a>
            <a href="https://www.facebook.com/ikechukwu.ndubuisi.98">
              <FacebookIcon style={{ fontSize: "3rem", color: "white" }} />
            </a>
          </div>
          <span className='copyright' >
            Coded With ❤️ by Jude Ndubuisi &copy; 2022{" "}
          </span>
          
        </span>
      </div>
    </div>
  );
};

export default Footer;
