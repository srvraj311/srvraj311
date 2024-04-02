"use client";
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function Navigation() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="nav">
        <a className="link toggle">
          <DarkModeToggle />
        </a>
        <a className="link" href="#home">
          <span>Home</span>
        </a>
        <a className="link" href="#skills">
          Skills
        </a>
        <a className="link" href="#projects">
          Projects
        </a>
        <a className="link" href="#experience">
          Experience
        </a>
        <a className="link" href="#contact">
          Contact
        </a>
      </div>
      <div className="topbar">
        <a className="link toggle">
          <DarkModeToggle />
        </a>
        <a
          className="link menu"
          style={{ transform: nav ? "rotate(90deg)" : "rotate(0deg)" }}
          onClick={() => {
            setNav((prev) => !prev);
          }}
        >
          <ThreeDotsVertical
            className="three_dots"
            style={{ color: "#64ffda", width: "30px", height: "48px" }}
          />
        </a>
      </div>
      {nav && (
        <div className="navbar">
          <a
            className="link"
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#home"
          >
            <span>Home</span>
          </a>
          <a
            className="link"
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#skills"
          >
            Skills
          </a>
          <a
            className="link"
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#projects"
          >
            Projects
          </a>
          <a
            className="link"
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#experience"
          >
            Experience
          </a>
          <a
            className="link"
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#contact"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}

export default Navigation;
