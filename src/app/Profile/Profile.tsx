"use client";
import React from "react";
import "./profile.css";
import Greeting from "../Greeting/Greeting";
import { Download, EnvelopeAt, Phone } from "react-bootstrap-icons";

function Profile() {
  return (
    <div className="profile" id="home">
      <div style={{ display: "flex", justifyContent: "center", height: '100%'}}>
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
              <a href="tel://+919142865908" className="email phone">
                <Phone /> &nbsp; +91 91428 65908
              </a>
              <a href="https://docs.google.com/document/d/1pwVMw1AFa5WONMjgiv9HB2F0ev5c-zQAvy8PteS8zAI/edit?usp=sharing" target="_blank" className="email phone">
                <Download/>&nbsp; Download my Resume
              </a>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px', flexDirection: 'column'}}>
          <Greeting />
          <div className="profile_details">
            <div className="bio">
              Results-oriented Software Engineer at Persistent Systems,
              specializing in Full Stack Web Development and Android
              Development. Proven track record as a pivotal UI (Angular)
              Developer for cutting-edge healthcare software projects.
              Contributed significantly to the success of Survey Designing and
              Delivering software. Recognized with Top Talent Recognition in
              FY23 for exceptional technical work on the Healthcare Optimization
              Platform. Adept at problem-solving, I thrive in dynamic
              environments, delivering high-quality solutions through
              collaboration and innovation. Seeking opportunities to leverage my
              skills in creating intuitive real-life applications and further
              excel in software development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
