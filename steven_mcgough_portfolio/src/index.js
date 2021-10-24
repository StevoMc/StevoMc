import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const props = {
  name: "Steven McGough",
  birthday: new Date(2001, 2, 31),
  job: "Cyber Security Student",
  country: "Germany",
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

const test_props = {
  name: "Moritz Petersen",
  birthday: new Date(1980, 1, 1),
  job: "Webflow Expert",
  country: "Germany",
};

ReactDOM.render(
  <React.StrictMode>
    <App {...props} />
    {/* <App {...test_props} dev /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
