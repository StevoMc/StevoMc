import React, { useState } from "react";

type Props = {
  name: string;
  members: [{}];
  data: {
    title: string;
  }[];
};

const Navbar = (props: Props) => {
  const [user, setUser] = useState(props);
  return React.createElement(
    "div",
    { class: "nav" },
    React.createElement(
      "div",
      { class: "nav_container margin_left_right" },
      user?.name !== undefined
        ? React.createElement(
            "a",
            {
              href: "/",
              class: "nav_logo nav_link center",
            },
            user?.name
          )
        : React.createElement(
            "a",
            { class: "nav_link nav_logo center" },
            "No User Data Available"
          ),
      user?.data !== undefined
        ? React.createElement(
            "div",
            { class: "nav_menu center" },
            user.members
              ? React.createElement(
                  "a",
                  { href: `/#Team`, class: "nav_link" },
                  "Team"
                )
              : null,
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
        { class: "nav_link nav_logo nav_request center" },
        "Project request"
      )
    )
  );
};

export default Navbar;
