import React, { useEffect, useState } from "react";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import HeaderRow from "./Components/HeaderRow";
import Intro from "./Components/Intro";
import PicDescRow from "./Components/PicDescRow";

type Props = {
  name: string;
  birthday: Date;
  age: number;
  job: string;
  country: string;
  dev: boolean;
  data: Array<any>;
};

const App = (props: Props) => {
  const [user, setUser] = useState(props);
  const user_profil = props.dev ? userProfilePlaceholder : userProfile; // dev_comment

  const userAge = (a: Date, b: Date) => {
    const age =
      new Date(a).getFullYear() -
      new Date(
        user?.birthday !== undefined ? user?.birthday.getTime() : Date.now()
      ).getFullYear();
    return age;
  };

  const description = `Hello, my name is ${user.name} and I am a  ${
    user?.age ?? userAge(new Date(Date.now()), user?.birthday)
  } year old ${user.job} from ${user.country}.`;

  return React.createElement(
    "div",
    { class: "app_container" },
    Navbar(user),
    HeaderRow(user.name),
    Intro(user.name, user.job, user_profil),
    PicDescRow(description, user_profil)
  );
};

export default App;
