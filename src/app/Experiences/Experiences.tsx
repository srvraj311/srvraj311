import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";

interface ExperienceItem {
  logo: string;
  title: string;
  date: string;
  descriptions: string[];
  achievements?: { label: string; link: string }[];
}

const experienceData: ExperienceItem[] = [
  {
    logo:
      "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Lead Software Engineer  @  Persistent Systems Limited",
    date: "February 2022 - Present",
    descriptions: [
      "Previous Senior Software Engineer",
      "Previous Software Engineer",
      "Previous Sofftware Engineer Intern",
      "At Persistent Systems, I progressed from Intern to Lead Software Engineer over three years, contributing across backend, frontend, and cloud development. I led the design and development of enterprise solutions for patient enrollment and clinical trials using Java, Spring Boot, Python, and advanced analytics. I enhanced UI performance with Angular and React, optimized algorithms for forecasting, and drove codebase migrations and security improvements. Additionally, I played a key role in Docker integration, cloud deployments (Azure/AWS), and team upskilling through training initiatives."
    ],
    achievements: [
      {
        label: "Top Talent Recongnition in FY23",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005442/Mail_-_Sourabh_._-_Outlook_page-0001_cprji7.jpg"
      },
      {
        label: "Bravo Team Awards",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005301/thumbnail_REQ-075665_49889_mlmoun.png"
      },
      {
        label: "Snowflake Snowpro Core",
        link: "https://www.credly.com/badges/dfce4d98-0b09-4fdd-a12c-54fae5525ecb/linked_in_profile"
      },
      {
        label: "Techgig Code Gladiators",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1659594346/techgig-cert_nx3zno.png"
      },
      {
        label: "Gen-AI Certification",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005856/1709801890836_page-0001_ulbbnb.jpg"
      },
      {
        label: "Microsoft Azure Fundamentals",
        link: "https://www.credly.com/badges/e152bff9-5de2-46d5-9e58-c897436f23cf?source=linked_in_profile"
      }
    ]
  },
  {
    logo:
      "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712015006/1675339403_fretboxx.jpeg_la3km1.jpg",
    title: "Android Developer Intern @  BinaryDots - Fretbox",
    date: "August 2021 - November 2021",
    descriptions: [
      "Fretbox Hostel Management Android Application",
      "During my Android Developer Internship at BinaryDots, I contributed to the development of a society security management application using Native Android and Spring Boot. I worked on designing user-friendly interfaces, implementing backend logic, and collaborating with developers, testers, and designers to enhance application functionality."
    ]
  }
];

const Experiences: React.FC = () => {
  return (
    <div className="project_card" id="experience">
      <div className="card-small skills">
        <span className="title">Experiences</span>
      </div>
      <div className="content">
        {experienceData.map((exp, index) => (
          <div className="project" key={index}>
            <div className="project_name">
              <img className="project_logo" src={exp.logo} alt="project" />
              <span
                className="project_links"
                style={{ marginLeft: "10px", paddingBottom: "26px" }}
              >
                {exp.title}
              </span>
            </div>
            <div
              className="project_date"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <i>{exp.date}</i>
            </div>
            {exp.descriptions.map((desc, i) => (
              <>
                {desc.includes("Previous") || desc.includes("Application") ? (
                  <><strong className="desc_highlight">{desc}</strong></>
                ) : desc.includes("During") ? (
                  <div className="project_desc" key={i}>{desc}</div>
                ) : (
                  <div className="project_desc" key={i}>{desc}</div>
                )}
              </>
            ))}
            {exp.achievements && (
              <>
                <div className="project_desc">
                  <h1>
                    <b>Achievements</b>
                  </h1>
                </div>
                <div className="project_links" style={{ marginBottom: "0px" }}>
                  {exp.achievements.map((ach, idx) => (
                    <a
                      key={idx}
                      href={ach.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project_link"
                    >
                      <BoxArrowUpRight /> &nbsp; {ach.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;