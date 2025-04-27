import bootstrap from "../assets/icons/bootstrap.svg";
import css from "../assets/icons/css.svg";
import figma from "../assets/icons/figma.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import laravel from "../assets/icons/laravel.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mongoose from "../assets/icons/mongoose.svg";
import mysql from "../assets/icons/mysql.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postman from "../assets/icons/postman.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";

const techStack = [
  // Frontend
  { name: "React", icon: react, category: "Frontend" },
  { name: "Tailwind", icon: tailwind, category: "Frontend" },
  { name: "Bootstrap", icon: bootstrap, category: "Frontend" },
  { name: "CSS", icon: css, category: "Frontend" },
  { name: "HTML", icon: html, category: "Frontend" },
  { name: "JavaScript", icon: javascript, category: "Frontend" },

  // Backend
  { name: "NodeJS", icon: nodejs, category: "Backend" },
  { name: "Laravel", icon: laravel, category: "Backend" },

  // Database
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "Mongoose", icon: mongoose, category: "Database" },
  { name: "MySQL", icon: mysql, category: "Database" },

  // Tools
  { name: "Git", icon: git, category: "Tools" },
  { name: "GitHub", icon: github, category: "Tools" },
  { name: "Figma", icon: figma, category: "Tools" },
  { name: "Postman", icon: postman, category: "Tools" },
];

export default techStack;
