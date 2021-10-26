import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";

const data_initial = {
  name: "Steven McGough",
  birthday: new Date(2001, 2, 31),
  age: 0,
  job: "Cyber Security Student",
  country: "Germany",
  profile: userProfile,
  bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
  data: [
    {
      title: "Benifits",
      content: React.createElement(
        "div",
        { class: "column wrap" },
        React.createElement(
          "h1",
          {
            class: "row",
          },
          "Skills: " +
            [
              "NodeJS",
              "JavaScript",
              "MongoDB",
              "React",
              "React Native",
              "CSS",
              "HTML",
              "Firebase",
              "Sass",
              "Typescript",
            ]
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
      ),
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
  ],
};

const members_initial = [
  {
    name: "Steven McGough",
    birthday: new Date(2001, 2, 31),
    job: "Cyber Security Expert",
    country: "Germany",
    profile: userProfile,
    bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(2001, 2, 31),
    job: "Webflow Expert",
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "As the Webflow expert, Moritz Petersen develops impressive websites for companies that want to grow with the help of a great Webflow website.",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App data={data_initial} members={members_initial} />
  </React.StrictMode>,
  document.getElementById("root")
);
