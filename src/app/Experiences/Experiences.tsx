import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function Experiences() {
  return (
    <div className="project_card" id="experience">
      <div className="card-small skills">
        <span className="title">Experiences</span>
      </div>

      <div className="content">
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Senior Software Engineer : Persistent Systems Limited
            </span>
          </div>
          <div className="project_date" style={{ marginLeft: "10px", marginTop: "10px" }}>
            <i>July 2022 - Present</i>
          </div>
          <div className="project_desc">
              <b>Healthcare Optimization Platform for Client </b> <br />
              <i> April 2023 - Present </i>
          </div>

          <div className="project_desc">
              <b>Healthcare Survey Platform for Client </b> <br />
              <i> July 2022 - April 2023 </i>
          </div>
          <div className="project_desc"><h1><b>Achievements</b></h1></div>
          <div className="project_links" style={{ marginBottom: "0px" }}>
            <a
              href="https://res.cloudinary.com/srvraj311/image/upload/v1712005442/Mail_-_Sourabh_._-_Outlook_page-0001_cprji7.jpg"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Top Talent Recongnition in FY23
            </a>

            <a
              href="https://res.cloudinary.com/srvraj311/image/upload/v1712005301/thumbnail_REQ-075665_49889_mlmoun.png"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Bravo Team Awards
            </a>
            <a
              href="https://www.credly.com/badges/dfce4d98-0b09-4fdd-a12c-54fae5525ecb/linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Snowflake Snowpro Core
            </a>
            <a
              href="https://res.cloudinary.com/srvraj311/image/upload/v1659594346/techgig-cert_nx3zno.png"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Techgig Code Gladiators
            </a>
            <a
              href="https://res.cloudinary.com/srvraj311/image/upload/v1712005856/1709801890836_page-0001_ulbbnb.jpg"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Gen-AI Certification
            </a>
          </div>
        </div>
        <div className="project" >
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Software Engineering Intern : Persistent Systems Limited
            </span>
          </div>
          <div style={{ marginLeft: "10px", marginTop: "10px" }}>
            <i>February 2022 - July 2022</i>
          </div>
          <div className="project_desc">
              <b>Hot Desking Platform</b> <br/>
              <i> May 2022 - July 2022 </i>
          </div>
          <div className="project_desc"><h1><b>Achievements</b></h1></div>
          <div className="project_links" style={{ marginBottom: "0px" }}>
          <a
              href="https://www.credly.com/badges/e152bff9-5de2-46d5-9e58-c897436f23cf?source=linked_in_profile"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Microsoft Azure Fundamentals
            </a>
            <a
              href="https://res.cloudinary.com/srvraj311/image/upload/v1712006199/1660068248368_qumhz2.jpg"
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BoxArrowUpRight/> &nbsp; Internship Completion Certificate
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project_name">
            <img
              className="project_logo"
              src="https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712015006/1675339403_fretboxx.jpeg_la3km1.jpg"
              alt="project"
            />
            <span
              className="project_link"
              style={{ marginLeft: "10px", padding: "24px" }}
            >
              Android Developer Intern : BinaryDots - Fretbox
            </span>
          </div>
          <div style={{ marginLeft: "10px", marginTop: "10px" }}>
            <i>August 2021 - November 2021</i>
          </div>
          <div className="project_desc">
              <b>Fretbox Hostel Management Android Application </b> <br />
              <i> August 2021 - Nonvember 2021 </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
