import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import H1Row from "./Components/H1Row";
import Intro from "./Components/Intro";
import PicDescRow from "./Components/PicDescRow";
import Members from "./Components/Members";
import SettingsIcon from "@mui/icons-material/Settings";

type Member = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  profile: string;
  bio: string;
};

type Props = {
  name: string;
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
      { class: "settings nav_link nav_logo center" },
      SettingsIcon
    ),
    H1Row(data.name),
    Intro(data.name, data.job, data.bio, data.profile),
    Members(members),
    PicDescRow(description, data.profile)
  );
};

export default App;
