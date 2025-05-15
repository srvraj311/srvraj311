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
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Lead Software Engineer @ Persistent Systems Limited",
    date: "March 2025 - Present",
    descriptions: [
      "Leading full-stack development of scalable enterprise solutions using AngularJS, Spring MVC, REST APIs, and D3.js in a hybrid agile environment."
    ],
    achievements: []
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Senior Software Engineer @ Persistent Systems Limited",
    date: "March 2024 - March 2025",
    descriptions: [
      "Led architecture modernization by transitioning monoliths to microservices, enhancing performance, security, and deployment efficiency."
    ],
    achievements: [
      {
        label: "Top Talent Recognition in FY24",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005442/Mail_-_Sourabh_._-_Outlook_page-0001_cprji7.jpg"
      },
      {
        label: "High Five - Team Award (Dec 2023)",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005301/thumbnail_REQ-075665_49889_mlmoun.png"
      },
      {
        label: "Microsoft Azure Fundamentals",
        link: "https://www.credly.com/badges/e152bff9-5de2-46d5-9e58-c897436f23cf?source=linked_in_profile"
      }
    ]
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Software Engineer @ Persistent Systems Limited",
    date: "July 2022 - March 2024",
    descriptions: [
      "Built and optimized clinical trial applications with Angular and Spring Boot; improved forecasting algorithms and UI performance."
    ],
    achievements: [
      {
        label: "Bravo Team Awards",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005301/thumbnail_REQ-075665_49889_mlmoun.png"
      },
      {
        label: "Snowflake Snowpro Core",
        link: "https://www.credly.com/badges/dfce4d98-0b09-4fdd-a12c-54fae5525ecb/linked_in_profile"
      },
      {
        label: "Gen-AI Certification",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005856/1709801890836_page-0001_ulbbnb.jpg"
      },
      {
        label: "Techgig Code Gladiators",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1659594346/techgig-cert_nx3zno.png"
      }
    ]
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Software Engineer Intern @ Persistent Systems Limited",
    date: "February 2022 - July 2022",
    descriptions: [
      "Assisted in feature development and bug fixing across Angular and Spring Boot modules, laying the foundation for full-time engineering."
    ],
    achievements: [
      {
        label: "Internship Completion Certificate",
        link: "https://res.cloudinary.com/srvraj311/image/upload/v1712005301/PSL_Internship_Certificate.jpg"
      }
    ]
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712015006/1675339403_fretboxx.jpeg_la3km1.jpg",
    title: "Android Developer Intern @ BinaryDots - Fretbox",
    date: "August 2021 - November 2021",
    descriptions: [
      "Developed core features and backend logic for a hostel management Android app using Native Android and Spring Boot."
    ],
    achievements: []
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
            {exp.achievements && exp.achievements.length > 0 && (
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