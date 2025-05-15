import React, { useState, useEffect } from "react";
import "./Projects.css";
import { BoxArrowUpRight, HandThumbsUp } from "react-bootstrap-icons";
import { sendUserInteraction, getLikes } from "../api.js";

interface Project {
  logo: string;
  title: string;
  description: string;
  links: {
    label: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1743870523/Group_6_j318rc.png",
    title: "Eduverse.ai",
    description:
      "Eduverse.ai is an AI-powered platform designed to generate personalized learning paths based on user preferences, such as age group, language, and learning duration. The application leverages LLaMA 3 70B via the Groq API, with a React frontend and a FastAPI backend for seamless learning path generation.",
    links: [
      {
        label: "View Project",
        url: "https://eduverse-backend-lqj5.onrender.com/",
      },
      {
        label: "Github Repo",
        url: "https://github.com/srvraj311/eduverse_ai",
      },
    ],
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1711702470/icon_phukh6.png",
    title: "Health.io : Healthcare Automation Platform",
    description:
      "Health-io leverages artificial intelligence (AI) to automate core healthcare functionalities, aiming to improve efficiency and streamline processes. It includes AI for digital prescriptions, intelligent medication recommendations, enhanced user experience, and AI-powered hospital account management.",
    links: [
      {
        label: "Github Repo - API",
        url: "https://github.com/srvraj311/health-io-api",
      },
      {
        label: "Github Repo - APP",
        url: "https://github.com/srvraj311/health-io-app",
      },
      {
        label: "Github Repo - WEB",
        url: "https://github.com/srvraj311/health-io-hospital",
      },
    ],
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1626325102/Main_2_hu5xxl.png",
    title: "enWrite : Personal Notes Application",
    description:
      "enWrite is a simple and clean web app for taking notes on the go, with real-time cloud sync, responsive UI, and rich user experience.",
    links: [
      {
        label: "View Project",
        url: "https://enwrite-web.web.app/",
      },
      {
        label: "Github Repo - Web",
        url: "https://github.com/srvraj311/enWrite-angular",
      },
      {
        label: "Github Repo - Android App",
        url: "https://github.com/srvraj311/enWrite-Android",
      },
    ],
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712001153/unnamed_bmu737.webp",
    title: "Ivory Minimal - Icon Pack",
    description:
      "A minimal and colorful Android icon pack with 300+ icons. Over 10,000 downloads on Play Store. Built using Blueprint Dashboard and designed using Photoshop and Illustrator.",
    links: [
      {
        label: "Play Store - App",
        url: "https://play.google.com/store/apps/details?id=com.srv.ivory",
      },
      {
        label: "Github Repo - Android",
        url: "https://github.com/srvraj311/ivory-icon-pack",
      },
    ],
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712002099/angular-icon-2048x2048-24b236vf_uysajt.png",
    title: "Seat Allocation System - Coding Problem",
    description:
      "Implemented an efficient seat booking algorithm using Dynamic Programming as part of a challenge on Unstop. Full-stack app available for demo and code inspection.",
    links: [
      {
        label: "View Project",
        url: "https://seat-allocation-fullstack.vercel.app/",
      },
      {
        label: "Github Repo",
        url: "https://github.com/srvraj311/seat-allocation-fullstack",
      },
    ],
  },
  {
    logo: "https://res.cloudinary.com/srvraj311/image/upload/c_pad,w_48/v1712002099/angular-icon-2048x2048-24b236vf_uysajt.png",
    title: "Shortify : URL Shortener made in 4 hours",
    description:
      "A MEAN Stack URL shortener with key-based mapping. Built and deployed under 4 hours as a personal challenge.",
    links: [
      {
        label: "View Project",
        url: "https://shrtfy.vercel.app/",
      },
      {
        label: "Github Repo",
        url: "https://github.com/srvraj311/shortify-url-shortener",
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [clicked, setClicked] = useState<Record<string, boolean>>({});

  // Fetch the initial likes when the component mounts
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeCounts = await getLikes();
        setLikes(likeCounts as Record<string, number>);
        console.log(likes)
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };
    fetchLikes();
  }, []);

  const handleLike = async (projectTitle: string) => {
    try {
      await sendUserInteraction({ type: "like", itemId: projectTitle });
      const likes = await getLikes();
      setLikes(likes as Record<string, number>);
    } catch (error) {
      console.error("Like failed:", error);
    }
  };

  return (
    <div className="project_card" id="projects">
      <div className="card-small skills">
        <span className="title">Projects</span>
      </div>

      <div className="content">
        {projects.map((project, idx) => (
          <div className="project" key={idx}>
            <div className="like_section">
              <button
                className="like_button"
                onClick={() => handleLike(project.title)}
                disabled={clicked[project.title]}
              >
                <div className="like_text">
                  <HandThumbsUp />
                </div>
                <div>{(likes?.hasOwnProperty(project.title) ? likes[project.title] : 0) ?? 0}</div>
              </button>
            </div>
            <div className="project_name">
              <img src={project.logo} alt={project.title} className="project_logo" />
              <h3 style={{ marginLeft: "1rem" }}>{project.title}</h3>
            </div>
            <p className="project_desc">{project.description}</p>
            <div className="project_links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="project_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BoxArrowUpRight /> &nbsp; {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
