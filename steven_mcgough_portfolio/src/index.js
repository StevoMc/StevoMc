import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";

const props = {
  name: "Steven McGough",
  birthday: new Date(2001, 2, 31),
  job: "Cyber Security Student",
  country: "Germany",
  profile: userProfile,
  bio: "Als Cyber Security Student entwickelt Steven McGough beeindrukende und vorallem sichere Webseiten für Unternehmen, die einen großen Wert auf Qualität liegen.",
  data: [
    {
      title: "Benifits",
      content: "Ich bin besser als alle!",
    },
    {
      title: "Projects",
      content: "Für die Uni eine Fullstack Webapp entwicket.",
    },
    {
      title: "Process",
      content: "Für die Uni eine Fullstack Webapp entwicket.",
    },
    {
      title: "FAQ",
      content: "Für die Uni eine Fullstack Webapp entwicket.",
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
    bio: "Als Cyber Security Student entwickelt Steven McGough beeindrukende und vorallem sichere Webseiten für Unternehmen, die einen großen Wert auf Qualität liegen.",
  },
  {
    name: "Moritz Petersen",
    birthday: new Date(1980, 1, 1),
    job: "Webflow Expert",
    country: "Germany",
    profile: userProfilePlaceholder,
    bio: "Als Webflow Experte entwickelt Moritz Petersen beeindruckende Webseiten für Unternehmen, die mithilfe einer großartigen Webflow Webseite wachsen wollen.",
  },
];

ReactDOM.render(
  <React.StrictMode>
    {/* <App {...props} /> */}
    <App {...props} members={members} />
  </React.StrictMode>,
  document.getElementById("root")
);
