"use client";
import React from "react";
import "./profile.css";
import Greeting from "../Greeting/Greeting";
import {
  Behance,
  Download,
  Envelope,
  EnvelopeAt,
  Github,
  GooglePlay,
  Linkedin,
  Phone,
} from "react-bootstrap-icons";
import Footer from "../Footer/Footer";

const Profile = React.forwardRef(({ ref }: any) => {
  return (
    <section className="profile" id="home" ref={ref}>
      <div
        className="profile_container"
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <div className="profile_pic">
          <img
            src="https://res.cloudinary.com/srvraj311/image/upload/v1698606809/va5ommxs3hjrzyfm9bir.jpg"
            alt="profile"
          ></img>
          <div className="horizontal">
            <div>
              <div className="name">SOURABH</div>
              <div className="role">Full Stack Developer</div>
            </div>
            <div className="contact">
              <a href="mailto://sourabhraj311@gmail.com" className="email">
                <EnvelopeAt /> &nbsp; Sourabhraj311@gmail.com
              </a>
              {/* <div className="email"> <EnvelopeAt /> &nbsp; Sourabhraj311@gmail.com</div> */}
              
              <a
                href="https://docs.google.com/document/d/1pwVMw1AFa5WONMjgiv9HB2F0ev5c-zQAvy8PteS8zAI/edit?usp=sharing"
                target="_blank"
                className="email phone"
              >
                <Download />
                &nbsp; Download my Resume
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            flexDirection: "column",
          }}
        >
          <Greeting />
          <div className="profile_details">
            <div className="bio">
              I am a <b>Full Stack Developer</b> with an experience of <b>3+</b> years in web development. I am a passion for creating web
              and mobile applications. I am a quick learner who likes to take on
              new challenges. I constantly seek opprtunities to learn and grow
              as a responsible and innovative developer.
            </div>
            <div className="skills_container">
              <a
                className="skill"
                href="https://www.linkedin.com/in/srvraj311"
                target="_blank"
              >
                <Linkedin /> &nbsp; &nbsp;LinkedIn
              </a>
              <a
                className="skill"
                href="https://www.github.com/srvraj311"
                target="_blank"
              >
                <Github /> &nbsp; &nbsp;Github
              </a>
              <a
                className="skill"
                href="mailto://sourabhraj311@gmail.com"
                target="_blank"
              >
                <Envelope /> &nbsp; &nbsp;E-Mail
              </a>
              <a
                className="skill"
                href="https://www.behance.net/sourabhraj"
                target="_blank"
              >
                <Behance /> &nbsp; &nbsp;Behance
              </a>
              <a
                className="skill"
                href="https://play.google.com/store/apps/dev?id=8639471483097231208"
                target="_blank"
              >
                <GooglePlay /> &nbsp; &nbsp; Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Profile.displayName = "Profile"; // Set the display name for the component

export default Profile;
