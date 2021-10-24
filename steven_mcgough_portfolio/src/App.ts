import React, { useEffect, useState } from "react";
import userProfile from "./Assets/UserImages/user_profil.png";
import userProfilePlaceholder from "./Assets/UserImages/placeholder.jpg";

type Props = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  dev: boolean;
  data: Array<any>;
};

const App = (props: Props) => {
  const [user, setUser] = useState(props);

  const user_profil = props.dev ? userProfilePlaceholder : userProfile; // dev_comment

  const userAge =
    new Date(Date.now()).getFullYear() -
    new Date(
      user?.birthday !== undefined ? user?.birthday.getTime() : Date.now()
    ).getFullYear();
  const description = `Hello, my name is ${user.name} and I am a  ${userAge} year old ${user.job} from ${user.country}.`;

  return React.createElement(
    "div",
    { class: "app_container" },
    React.createElement(
      "div",
      { class: "nav" },
      React.createElement(
        "div",
        { class: "nav_container container" },
        user?.name !== undefined
          ? React.createElement(
              "a",
              { href: "/", class: "nav_link nav_logo" },
              user.name
            )
          : React.createElement(
              "a",
              { class: "nav_link nav_logo" },
              "No User Data Available"
            ),
        user?.data !== undefined
          ? React.createElement(
              "div",
              { class: "nav_menu" },
              user?.data.map((element: any, index: number) => {
                return React.createElement(
                  "a",
                  { href: `/#${element.title}`, class: "nav_link" },
                  element.title
                );
              })
            )
          : null,
        React.createElement(
          "a",
          { class: "nav_link nav_logo nav_request" },
          "Project request"
        )
      )
    ),
    user?.name !== undefined
      ? React.createElement("h1", { class: "user_name" }, user?.name)
      : React.createElement(
          "a",
          { class: "nav_link error" },
          "No username set!"
        ),
    React.createElement(
      "div",
      { class: "row" },
      React.createElement("img", {
        class: "user_profile",
        src: user_profil,
      }),
      React.createElement("h2", { class: "user_description" }, description)
    ),
    user !== undefined
      ? null
      : React.createElement(
          "a",
          { class: "nav_link error" },
          "You first need to fill out the Website Form!"
        )
  );
};

export default App;
