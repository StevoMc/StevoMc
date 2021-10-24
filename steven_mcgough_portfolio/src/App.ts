import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import H1Row from "./Components/H1Row";
import Intro from "./Components/Intro";
import PicDescRow from "./Components/PicDescRow";
import Members from "./Components/Members";

type Member = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  profile: string;
  bio: string;
};

type Props = {
  name: string; // the name of the user
  birthday: Date;
  age: number;
  job: string;
  country: string;
  bio: string;
  profile: string;
  dev: boolean;
  data: Array<any>;
  members: [Member];
};

const App = (props: Props) => {
  const [data, setData] = useState(props);
  const [members, setMembers] = useState(props.members);
  const [darkMode, setDarkMode] = useState(true);

  const userAge = (a: Date, b: Date) => {
    const age =
      new Date(a).getFullYear() -
      new Date(
        data?.birthday !== undefined ? data?.birthday.getTime() : Date.now()
      ).getFullYear();
    return age;
  };
  const description = `Hello, my name is ${data.name} and I am a  ${
    data?.age ?? userAge(new Date(Date.now()), data?.birthday)
  } year old ${data.job} from ${data.country}.`;

  return React.createElement(
    "div",
    { class: "app_container" },
    (data ?? members) === undefined ? Error : null,
    Navbar(data),
    React.createElement(
      "div",
      {
        class: "settings nav_link nav_logo center",
        onClick: (e: any) => {
          setDarkMode(!darkMode);
          var element = document.body;
          element.classList.toggle("dark-mode");
        },
      },
      darkMode ? "Dark" : "Bight"
    ),
    H1Row("" /* data?.name */),
    React.createElement(
      "section",
      { id: "home" },
      Intro(data.name, data.job, data.bio, data.profile)
    ),
    (members?.length || 0) > 1
      ? React.createElement("section", { id: "Team" }, Members(members))
      : null,
    PicDescRow(description, data.profile),
    React.createElement(
      "main",
      { class: "content_container column" },
      data.data.map((element, index) => {
        return React.createElement(
          "section",
          { id: element.title, class: "section" },
          React.createElement(
            "span",
            { class: "content_span", key: index },
            React.createElement(
              "h2",
              { class: "content_title" },
              index + 1 + ". " + element.title
            ),
            React.createElement("h3", { class: "content" }, element.content)
          )
        );
      })
    ),
    ""
  );
};

export default App;
