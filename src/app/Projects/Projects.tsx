import React from "react";
import "./Projects.css";
import { BoxArrowUpRight } from "react-bootstrap-icons";
function Projects() {
  return (
    <div className="project_card" id="projects">
      <div className="card-small skills">
        <span className="title">My Personal Projects</span>
      </div>

      <div className="content">
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1711702470/icon_phukh6.png"
              alt="project"
            />{" "}
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Health.io : Healthcare Automation Platform
            </span>
          </div>
          <div className="project_desc">
            Health-io leverages artificial intelligence (AI) to automate core
            healthcare functionalities, aiming to improve efficiency and
            streamline processes across the healthcare ecosystem. This includes
            utilizing AI for digital prescription generation, intelligent
            medication recommendations, and enhanced patient and provider
            experiences. Additionally, Health.io incorporates AI-powered
            hospital account management to optimize administrative tasks and
            financial processes.
          </div>
          <div className="project_links">
            <a
              href="https://github.com/srvraj311/health-io-api"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - API
            </a>
            <a
              href="https://github.com/srvraj311/health-io-app"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - APP
            </a>
            <a
              href="https://github.com/srvraj311/health-io-hospital"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - WEB
            </a>
          </div>
        </div>

        {/* Second Project */}
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1626325102/Main_2_hu5xxl.png"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              enWrite : Personal Notes Application
            </span>
          </div>
          <div className="project_desc">
            enWrite is an simple and clean web app for taking notes on the go
            that syncs across your devices.Comes with Note taking and Real-Time
            cloud sync Simple and Easy-to-use UI with Rich User Experience Fully
            Responsive Design
          </div>
          <div className="project_links">
          <a
              href="https://enwrite-web.web.app/"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; View Project
            </a>
            <a
              href="https://github.com/srvraj311/enWrite-angular"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - Web
            </a>
            <a
              href="https://github.com/srvraj311/enWrite-Android"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - Android App
            </a>
          </div>
        </div>

        {/* Third Project */}
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712001153/unnamed_bmu737.webp"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Ivory Minimal - Icon Pack
            </span>
          </div>
          <div className="project_desc">
            A minimal and colorfull android icon pack, with 300+ icons for
            dfifferent apps made as a design project. The icon pack has more
            than 10000 downloads on play store. The application is based on
            blueprint-dashboard, with custom designed icons using photoshop and
            adobe illustrator.
          </div>
          <div className="project_links">
            <a
              href="https://play.google.com/store/apps/details?id=com.srv.ivory"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Play Store - App
            </a>
            <a
              href="https://github.com/srvraj311/ivory-icon-pack"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo - Android
            </a>
          </div>
        </div>

        {/* Fourth Project */}
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712002099/angular-icon-2048x2048-24b236vf_uysajt.png"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Seat Allocation System - Coding Problem
            </span>
          </div>
          <div className="project_desc">
          Displayed an efficient seat booking algorithm based on Dynamic Programming onto a full stack application as a part of Hiring Challenge by Dare2Compete.com (Unstop.com). View the repo for problem statement and my solution for the same.
          </div>
          <div className="project_links">
            <a
              href="https://github.com/srvraj311/seat-allocation-fullstack"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo 
            </a>
          </div>
        </div>

        {/* Fifth Project */}
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712002099/angular-icon-2048x2048-24b236vf_uysajt.png"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Shortify : URL Shortener made in 4 hours
            </span>
          </div>
          <div className="project_desc">
          A MEAN Stack application to shorten a long URL, Uses randomly generated keys to map with website names and then access them through same from application-url/key.This project was build and deployed under 4 hours as a personal challenge.
          </div>
          <div className="project_links">
            <a
              href="https://github.com/srvraj311/shortify-url-shortener"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Github Repo 
            </a>
          </div>
          <div className="project_screenshots width-small">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1650611514/Screenshot_2022-04-22_at_12.36.33_PM_ewbfp5.png"
              alt="screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
