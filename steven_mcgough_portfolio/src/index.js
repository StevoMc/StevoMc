import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userProfile from "./Assets/UserImages/user_profil.png";

const props = {
  name: "Steven McGough",
  birthday: new Date(2001, 2, 31),
  job: "Cyber Security Student",
  country: "Germany",
  profile: userProfile,
  bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
  data: [
    {
      title: "Benifits",
      content: React.createElement(
        "div",
        { class: "column wrap" /* style: { width: 254, height: 254 } */ },
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

const members = [
  {
    name: "Steven McGough",
    birthday: new Date(2001, 2, 31),
    job: "Cyber Security Student",
    country: "Germany",
    profile: userProfile,
    bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/* <App {...props} /> */}
    <App {...props} members={members} />
  </React.StrictMode>,
  document.getElementById("root")
);
