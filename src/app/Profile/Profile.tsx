"use client"
import React from "react";
import "./profile.css";
import Greeting from "../Greeting/Greeting";
import { EnvelopeAt, Phone } from "react-bootstrap-icons";

function Profile() {
  return (
    <div className="profile">
      <Greeting />
      <div style={{ display: "flex", justifyContent: "center" }}>
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
              <a href="tel://+919142865908" className="phone">
                <Phone /> &nbsp; +91 9142865908
              </a>
            </div>
          </div>
        </div>
        <div className="profile_details">
          <div>
            <div className="name">SOURABH</div>
            {/* <div className="role">*/}
            {/*    Full Stack Developer*/}
            {/*</div> */}
          </div>
          <div className="bio">
            Results-oriented Software Engineer at Persistent Systems,
            specializing in Full Stack Web Development and Android Development.
            Proven track record as a pivotal UI (Angular) Developer for
            cutting-edge healthcare software projects. Contributed significantly
            to the success of Survey Designing and Delivering software.
            Recognized with Top Talent Recognition in FY23 for exceptional
            technical work on the Healthcare Optimization Platform. Adept at
            problem-solving, I thrive in dynamic environments, delivering
            high-quality solutions through collaboration and innovation. Seeking
            opportunities to leverage my skills in creating intuitive real-life
            applications and further excel in software development.
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="greetings">
    //     <Greeting />
    //   </div>
    //   <div className="profile">
    //     <div className="profile_pic">
    //       {/* <img src={profilePic} alt="profile"></img> */}
    //       <img
    //         src="https://res.cloudinary.com/srvraj311/image/upload/v1698606809/va5ommxs3hjrzyfm9bir.jpg"
    //         alt="profile"
    //       ></img>
    //     </div>
    //     <div className="profile_details">
    //       <div>
    //         <div className="name">SOURABH</div>
    //         {/* <div className="role">*/}
    //         {/*    Full Stack Developer*/}
    //         {/*</div> */}
    //       </div>
    //       <div className="bio">
    //         Results-oriented Software Engineer at Persistent Systems,
    //         specializing in Full Stack Web Development and Android Development.
    //         Proven track record as a pivotal UI (Angular) Developer for
    //         cutting-edge healthcare software projects. Contributed significantly
    //         to the success of Survey Designing and Delivering software.
    //         Recognized with Top Talent Recognition in FY23 for exceptional
    //         technical work on the Healthcare Optimization Platform. Adept at
    //         problem-solving, I thrive in dynamic environments, delivering
    //         high-quality solutions through collaboration and innovation. Seeking
    //         opportunities to leverage my skills in creating intuitive real-life
    //         applications and further excel in software development.
    //       </div>

    //       {/*<div className="horizontal">*/}
    //       {/*<div className="contact">*/}
    //       {/*    <div className="email cardify-small"> <EnvelopeAt /> &nbsp; Sourabhraj311@gmail.com</div>*/}
    //       {/*    <div className="phone cardify-small"> <Phone /> &nbsp; +91 9142865908</div>*/}
    //       {/*</div>*/}
    //       {/*</div>*/}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Profile;
