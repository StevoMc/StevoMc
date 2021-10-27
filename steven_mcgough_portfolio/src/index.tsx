import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Client } from "@notionhq/client";
import App from "./App";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";
import PictureShowcase from "Components/PictureShowcase";
import SkillsShowcase from "Components/SkillsShowcase";
require("dotenv").config();

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
  {
    title: "NodeJS",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    status: "beginner",
  },
  {
    title: "JavaScript",
    logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    status: "beginner",
  },
  {
    title: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    status: "beginner",
  },
  {
    title: "React",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    status: "beginner",
  },
  {
    title: "React Native",
    logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    status: "beginner",
  },
  {
    title: "CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    status: "beginner",
  },
  {
    title: "HTML",
    logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    status: "beginner",
  },
  {
    title: "Firebase",
    logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    status: "beginner",
  },
  {
    title: "Sass",
    logo: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
    status: "beginner",
  },
  {
    title: "Typescript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    status: "beginner",
  },
];

const pageContent = [
  {
    title: "Benifits",
    content: [
      SkillsShowcase(skills),
      PictureShowcase([
        userProfile,
        "https://via.placeholder.com/150",
        userProfilePlaceholder,
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
        userProfile,
        "https://via.placeholder.com/150",
        userProfilePlaceholder,
        userProfile,
        "https://via.placeholder.com/150",
        userProfilePlaceholder,
      ]),
    ],
  },
  {
    title: "Projects",
    content: ["Für die Uni eine Fullstack Webapp entwicket."],
  },
  {
    title: "Process",
    content: ["1. Anfrage stellen. 2. Zusammen Vorstellung bilden"],
  },
  {
    title: "FAQ",
    content: ["Hier Fragen stellen..."],
  },
];

const members_initial = [
  {
    name: "Steven McGough",
    birthday: new Date(2001, 2, 31),
    job: "Cyber Security Expert",
    age: 0,
    country: "Germany",
    profile: userProfile,
    bio: "As a cyber security student, Steven McGough develops impressive and above all secure websites for companies which place a high emphasis on quality.",
    description: "",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(2001, 2, 31),
    job: "Webflow Expert",
    age: 0,
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "As the Webflow expert, Moritz Petersen develops impressive websites for companies that want to grow with the help of a great Webflow website.",
    description: "",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(2001, 2, 31),
    job: "Webflow Expert",
    age: 0,
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "As the Webflow expert, Moritz Petersen develops impressive websites for companies that want to grow with the help of a great Webflow website.",
    description: "",
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
  description: `Hello, my name is ${
    members_initial[0].name
  } and I am a  ${setFunctions.userAge(
    new Date(Date.now()),
    members_initial[0].birthday
  )} year old ${members_initial[0].job} from ${members_initial[0].country}.`,
  skills: skills,
  functions: setFunctions,
};

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

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
