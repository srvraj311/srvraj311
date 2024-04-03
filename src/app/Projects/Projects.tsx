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
          <div className="project_screenshots">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1711998404/Screenshot_1711998198_xuvdt4.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1711998404/Screenshot_1711998081_xvjyak.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1711998404/Screenshot_1711998078_xq0u6d.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1711998403/Screenshot_1711998065_wwhycr.png"
              alt="screenshot"
            />
          </div>
          <div className="project_screenshots2">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1653310436/Screenshot_2022-05-23_at_6.21.35_PM_pdxxht.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1653310427/Screenshot_2022-05-23_at_6.21.39_PM_ipurvs.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1652737204/Screenshot_2022-05-17_at_2.56.35_AM_tjwnhi.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1652738402/Screenshot_2022-05-17_at_3.29.53_AM_qnib20.png"
              alt="screenshot"
            />
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
          <div className="project_screenshots">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1629315800/Screenshot_2021-08-18-22-23-13-281_com.srvraj311_x6f5ga.jpg"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1630057072/WhatsApp_Image_2021-08-27_at_3.05.49_PM_jwjdme.jpg"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1629315800/Screenshot_2021-08-18-22-23-03-322_com.srvraj311_tqf8kk.jpg"
              alt="screenshot"
            />
          </div>
          <div className="project_screenshots2">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1651576417/Screenshot_2022-05-03_at_4.41.12_PM_t4lf8o.png"
              alt="screenshot"
            />
            {/* <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1651576414/Screenshot_2022-05-03_at_4.41.21_PM_jge05k.png"
              alt="screenshot"
            /> */}
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1651576421/Screenshot_2022-05-03_at_4.41.43_PM_soo1bk.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1651576406/Screenshot_2022-05-03_at_4.42.00_PM_vx2op9.png"
              alt="screenshot"
            />
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
          <div className="project_screenshots width-small">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001310/unnamed_5_syxwis.webp"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001311/unnamed_4_vvh11n.webp"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001311/unnamed_2_dh386v.webp"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001312/unnamed_1_r55fse.webp"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001313/unnamed_3_xyx1uc.webp"
              alt="screenshot"
            />
             <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1712001590/unnamed_7_rytyjx.webp"
              alt="screenshot"
            />
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
          <div className="project_screenshots width-small">
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1649563425/Screenshot_2022-04-10_at_9.32.32_AM_q5oswh.png"
              alt="screenshot"
            />
            <img
              className="project_screenshot"
              src="https://res.cloudinary.com/srvraj311/image/upload/v1649563429/Screenshot_2022-04-10_at_9.32.47_AM_vzxnch.png"
              alt="screenshot"
            />
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
