import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";

type Skill = {
  title: string;
  logo: string;
  status: string;
};

/** Funktions */
const setFunctions = {
  // List all skills as cards
  mapSkills: (skills: Skill[]) => {
    return skills.map((x) =>
      React.createElement(
        "h3",
        {
          class: "user_info",
          style: {
            height: "50px",
            width: "250px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          },
        },
        React.createElement(
          "img",
          {
            class: "img",
            src: x.logo,
            style: { height: "50px", width: "50px" },
          },
          null
        ),
        x.title + " - " + x.status
      )
    );
  },

  // Calculate User Age
  userAge: (a: Date, b: Date) =>
    new Date(a).getFullYear() - new Date(b).getFullYear(),
};

const skills = [
  { title: "NodeJS", logo: userProfile, status: "beginner" },
  { title: "JavaScript", logo: userProfile, status: "beginner" },
  { title: "MongoDB", logo: userProfile, status: "beginner" },
  { title: "React", logo: userProfile, status: "beginner" },
  { title: "React Native", logo: userProfile, status: "beginner" },
  { title: "CSS", logo: userProfile, status: "beginner" },
  { title: "HTML", logo: userProfile, status: "beginner" },
  { title: "Firebase", logo: userProfile, status: "beginner" },
  { title: "Sass", logo: userProfile, status: "beginner" },
  { title: "Typescript", logo: userProfile, status: "beginner" },
];

const pageContent = [
  {
    title: "Benifits",
    content: ["skills", "pictures"],
  },
  {
    title: "Projects",
    content: "Für die Uni eine Fullstack Webapp entwicket.",
  },
  {
    title: "Process",
    content: "1. Anfrage stellen. 2. Zusammen Vorstellung bilden",
  },
  {
    title: "FAQ",
    content: "Hier Fragen stellen...",
  },
];

// Benifits
/* React.createElement(
        "div",  
        {
          class: "column",
        },
        // Skills
        React.createElement(
          "div",
          { class: "row column padding_row" },
          React.createElement(
            "h2",
            {
              class: "",
              style: {
                flex: "1",
              },
            },
            "Skills:"
          ),
          React.createElement(
            "div",
            {
              class: "",
              style: {
                flexWrap: "wrap",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              },
            },
            // MAP Skills HERE 
            mapSkills(skills)
          )
        ),*/

// Pictures
/*
        React.createElement(
          "div",
          {
            class: "row padding_row",
            style: {
              display: "flex",
              justifyContent: "space-between",
              height: "fit-content",
              flexWrap: "wrap",
            },
          },
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          ),
          React.createElement(
            "img",
            {
              class: "",
              src: "https://via.placeholder.com/150",
              style: { width: 254, height: 254 },
            },
            null
          )
        )
      ), */

const members_initial = [
  {
    name: "Steven McGough",
    birthday: new Date(2001, 2, 31),
    job: "Cyber Security Expert",
    age: 0,
    country: "Germany",
    profile: userProfile,
    bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(2001, 2, 31),
    job: "Webflow Expert",
    age: 0,
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "As the Webflow expert, Moritz Petersen develops impressive websites for companies that want to grow with the help of a great Webflow website.",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(2001, 2, 31),
    job: "Webflow Expert",
    age: 0,
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "As the Webflow expert, Moritz Petersen develops impressive websites for companies that want to grow with the help of a great Webflow website.",
  },
];

const data_initial = {
  name: members_initial[0].name,
  birthday: members_initial[0].birthday,
  age: members_initial[0].age,
  job: members_initial[0].job,
  country: members_initial[0].country,
  profile: members_initial[0].profile,
  bio: members_initial[0].bio,
  skills: skills,
  functions: setFunctions,
};

// data: pageContent,

ReactDOM.render(
  <React.StrictMode>
    <App
      data={data_initial}
      members={members_initial}
      pageContent={pageContent}
      functions={setFunctions}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
