import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import H1Row from "./Components/H1Row";
import Intro from "./Components/Intro";
import PicDescRow from "./Components/PicDescRow";
import Members from "./Components/Members";
import userProfile from "./Assets/UserImages/user_profil.png";
import user_banner from "./Assets/UserImages/user_banner.jpeg";

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
  data: {
    title: string;
    content: any;
  }[];
};

type Props = {
  data: Data;
  members: Member[];
};

const data_template = {
  name: "",
  birthday: new Date(),
  age: 0,
  job: "",
  country: "",
  profile: "",
  bio: "",
  data: [],
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

  // Calculate User Age
  const userAge = (a: Date, b: Date) => {
    const age =
      new Date(a).getFullYear() -
      new Date(
        data?.birthday !== undefined ? data?.birthday.getTime() : Date.now()
      ).getFullYear();
    return age;
  };

  // Description for Welcome Message
  const description = `Hello, my name is ${data?.name} and I am a  ${userAge(
    new Date(Date.now()),
    data?.birthday
  )} year old ${data?.job} from ${data?.country}.`;

  return React.createElement(
    "div",
    { class: "app_container" },
    (data ?? members) === undefined ? Error : null,
    Navbar({ ...data, members }),
    React.createElement(
      "div",
      {
        class: "settings nav_link nav_logo center",
        onClick: (e: any) => {
          setDarkMode(!darkMode);
          clickEvent();
          let element = document.body;
          element.classList.toggle("dark-mode");
        },
      },
      darkMode ? "Dark" : "Bight"
    ),
    H1Row("" /* data?.name */),
    React.createElement(
      "main",
      { class: "content_container column" },
      React.createElement(
        "section",
        { id: "Home" },
        Intro(data.name, data!.profile, data!.bio, data!.job)
      ),
      React.createElement(
        "section",
        { id: "Row" },
        PicDescRow(description, data!.profile)
      ),
      (members!.length || 0) > 1
        ? React.createElement(
            "section",
            { id: "Team", class: "section" },
            Members(members!)
          )
        : null,
      data!.data.map((element, index) => {
        return React.createElement(
          "section",
          { id: element.title, class: "section" },
          React.createElement(
            "span",
            { class: "content_span", key: index },
            React.createElement(
              "h2",
              { class: "content_title" },
              element.title
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
