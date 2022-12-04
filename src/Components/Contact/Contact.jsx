import React, { useState } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {themeContext} from '../../Context';
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b5wum12', 'template_qgfcu99', form.current, '9D_eqGzmMkAl332pA')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}  >
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            autoComplete="true"
          />
          <textarea name="message" className="user" placeholder="Message" autoComplete="true" />
          <input type="submit" value="Send" className="button" />
          <span style={{color: darkMode? 'white': ''}}>{done && "Thanks for Contacting Me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
