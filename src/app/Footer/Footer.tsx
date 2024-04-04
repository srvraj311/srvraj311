import { Play } from "next/font/google";
import React from "react";
import './Footer.css';
import { Behance, Envelope, Github, GooglePlay, Linkedin, Mailbox, Mailbox2, Mailbox2Flag, Phone, PhoneFlip, PhoneVibrate, Playstation } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="project_card" id="contact">
  
      <div className="content">
        <p> &copy; Sourabh 2024</p>
        <div className="skills_container" >
          <a className="skill" href="https://www.linkedin.com/in/srvraj311" target="_blank">
            <Linkedin /> &nbsp; &nbsp;LinkedIn
          </a>
          <a className="skill" href="https://www.github.com/srvraj311" target="_blank">
            <Github /> &nbsp; &nbsp;Github
          </a>
          <a className="skill" href="mailto://sourabhraj311@gmail.com" target="_blank">
            <Envelope /> &nbsp; &nbsp;E-Mail
          </a>
          <a className="skill" href="tel://+91 9142865908" target="_blank">
            <Phone/> &nbsp; Phone
          </a>
          <a className="skill" href="https://www.behance.net/sourabhraj" target="_blank">
            <Behance/> &nbsp; &nbsp;Behance
          </a>
          <a className="skill" href="https://play.google.com/store/apps/dev?id=8639471483097231208" target="_blank">
            <GooglePlay /> &nbsp; &nbsp; Play Store
          </a>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;
