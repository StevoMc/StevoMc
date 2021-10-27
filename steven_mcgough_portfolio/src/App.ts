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
  }, [data, members, darkMode, props.data, props.members]);

  // Description for Welcome Message
  const description = `Hello, my name is ${
    data?.name
  } and I am a  ${functions.userAge(
    new Date(Date.now()),
    data?.birthday
  )} year old ${data?.job} from ${data?.country}.`;

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

  const Content = () =>
    pageContent.map(
      (
        element: {
          title: string;
          content: any;
        },
        index: any
      ) => {
        return Section(element.title, true, [
          React.createElement(
            "span",
            { class: "content_span", key: index },
            React.createElement(
              "h2",
              { class: "content_title" },
              element.title
            ),
            React.createElement("h3", { class: "content" }, element.content)
          ),
        ]);
      }
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
      Section("Row", false, [PicDescRow(description, data.profile)]),
      Team(),
      Content(),
    ]),
    Footer(),
  ]);
};

export default App;
