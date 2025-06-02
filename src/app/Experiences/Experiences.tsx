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
      "Leading the design and development of impactful features in the Healthcare and Life Sciences domain, driving enhanced customer experience and product profitability. I focus on scalable architecture, team mentorship, and delivering business-aligned solutions with measurable value."
    ],
    achievements: []
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712003614/Persistent_Logo_sjwg6u.png",
    title: "Senior Software Engineer @ Persistent Systems Limited",
    date: "March 2024 - March 2025",
    descriptions: [
      "As a Senior Software Engineer at Persistent Systems Limited, I focused on enhancing application security, performance, and scalability. I led major upgrades, technology migrations, and played a key role in transitioning the monolithic architecture to microservices. My work ensured smoother deployments, better system resilience, and improved overall application efficiency."
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
      "As a Software Engineer at Persistent Systems Limited, I developed healthcare-focused web applications using Angular, Spring Boot, and MongoDB, enhancing patient enrollment and clinical trial planning. I optimized backend algorithms for forecasting and milestone calculations, and improved UI performance with tools like ag-Grid and GoJS. I also contributed to major releases, led Angular version upgrades, and received multiple Bravo Awards for exceptional performance."
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
      "As an intern at Persistent Systems Limited, I contributed to feature development and bug fixing across full-stack modules, gaining hands-on experience with Angular, Java, and Spring Boot. I collaborated closely with senior developers, participated in code reviews, and quickly adapted to agile development practices, laying a strong foundation for my software engineering career."
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
      `Worked on project FretBox Management, Learned to write efficient and scalable code. Day to Day tasks included Converting a UI Prototype to layouts and attaching Data via API calls. Adding logical implementation of some sections and providing helpful contribution in daily meetings. Understood scaled use of VCS in production-level code. Gained experience with Android and improved my Problem-Solving ability.`
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