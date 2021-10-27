import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import H1Row from "./Components/H1Row";
import Intro from "./Components/Intro";
import PicDescRow from "./Components/PicDescRow";
import Members from "./Components/Members";
import darkModeIcon from "./Assets/Clipart/darkmode.svg";
import lightModeIcon from "./Assets/Clipart/lightmode.svg";

type Member = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  profile: string;
  bio: string;
};

type Data = {
  name: string; // the name of the user
  birthday: Date;
  age: number;
  job: string;
  country: string;
  bio: string;
  description: string;
  profile: string;
  skills: {
    title: string;
    logo: string;
    status: string;
  }[];
  functions: any;
};

type Props = {
  data: Data;
  members: Member[];
  pageContent: {
    title: string;
    content: any;
  }[];
  functions: any;
};

const data_template = {
  name: "",
  birthday: new Date(),
  age: 0,
  job: "",
  country: "",
  profile: "",
  bio: "",
  description: "",
  skills: [],
  functions: {},
};

const members_template = [
  {
    name: "",
    birthday: new Date(),
    job: "",
    country: "",
    profile: "",
    bio: "",
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

const App = (props: Props) => {
  const [data, setData] = useState<Data>(props.data ?? data_template);
  const [members, setMembers] = useState<Member[]>(
    props.members ?? members_template
  );
  const [pageContent, setContent] = useState<any>(props.pageContent);
  const [functions, setFunctions] = useState<any>(props.functions);
  const [darkMode, setDarkMode] = useState(true);

  const clickEvent = useCallback(() => {
    setData(data_template);
  }, []);

  (() => {
    let element = document.getElementById("banner");
    if (element) {
      element!.style.backgroundImage =
        'url("https://pbs.twimg.com/profile_banners/780833723902156800/1573632305/1500x500")';
    }
  })();

  useEffect(() => {
    if (props.data !== data) setData(props.data);
    if (props.members !== members) setMembers(props.members);

    console.log(pageContent);
  }, [data, members, darkMode, props.data, props.members]);

  const App = (el: any[]) =>
    React.createElement(
      "div",
      { class: "app_container" },
      el.map((x: any) => x)
    );

  const DarkmodeButton = () => {
    return React.createElement(
      "div",
      {
        class: "dark_mode_btn nav_link nav_logo center",
        onClick: (e: any) => {
          setDarkMode(!darkMode);
          clickEvent();
          let element = document.body;
          element.classList.toggle("dark-mode");
        },
      },
      darkMode
        ? React.createElement("img", {
            src: darkModeIcon,
            class: "dark_mode_btn_icon",
            style: { loading: "lazy" },
          })
        : React.createElement("img", {
            src: lightModeIcon,
            class: "dark_mode_btn_icon",
            style: { loading: "lazy" },
          })
    );
  };

  const SectionMain = (el: any[]) => {
    return React.createElement(
      "main",
      { class: "content_container column" },
      el.map((x: any) => x)
    );
  };

  const Section = (id: string, isSection: boolean, el: any[]) => {
    const cla = isSection ? "section" : "";
    return React.createElement(
      "section",
      { id: id, class: cla },
      el.map((x: any) => x)
    );
  };

  const Team = () => {
    return (members!.length || 0) > 1
      ? Section("Team", true, [Members(members!)])
      : null;
  };

  const Content = (el: any[]) =>
    el.map(
      (
        element: {
          title: string;
          content: any;
        },
        index: any
      ) =>
        Section(element.title, true, [
          React.createElement(
            "span",
            { class: "content_span", key: index },
            React.createElement(
              "h2",
              { class: "content_title" },
              element.title
            ),
            React.createElement(
              "div",
              { class: "content" },
              element.content.map((el: any, index: number) => {
                return React.createElement(
                  "div",
                  { key: index, id: index, class: "content_inner" },
                  el
                );
              })
            )
          ),
        ])
    );

  const Footer = () => {
    return React.createElement(
      "div",
      {
        id: "footer",
        class: "",
        style: { background: "#444", height: "8rem", padding: "2rem 3rem" },
      },
      "Footer"
    );
  };

  return App([
    DarkmodeButton(),
    Navbar({ ...data, pageContent, members }),
    SectionMain([
      Section("Home", false, [
        H1Row(""),
        Intro(data.name, data.profile, data.bio, data.job),
      ]),
      Section("Row", false, [PicDescRow(data.description, data.profile)]),
      Team(),

      Content(pageContent),
    ]),
    Footer(),
  ]);
};

export default App;
