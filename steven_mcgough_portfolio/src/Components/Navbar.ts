import React, { useState } from "react";

type Props = {
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
  members: {
    name: string;
    birthday: Date;
    job: string;
    country: string;
    profile: string;
    bio: string;
  }[];
};

const requestClickEvent = (event: Event) => {
  alert("Click");
};

const Navbar = (props: Props) => {
  return React.createElement(
    "div",
    { class: "nav" },
    React.createElement(
      "div",
      { class: "nav_container margin_left_right" },
      props?.name !== undefined
        ? React.createElement(
            "a",
            {
              href: "/",
              class: "nav_logo nav_link center",
            },
            props?.name
          )
        : React.createElement(
            "a",
            { class: "nav_link nav_logo center" },
            "No User Data Available"
          ),
      props?.data !== undefined
        ? React.createElement(
            "div",
            { class: "nav_menu center" },
            (props.members?.length || 0) > 1
              ? React.createElement(
                  "a",
                  { href: `/#Team`, class: "nav_link" },
                  "Team"
                )
              : null,
            props?.data.map((element: any, index: number) => {
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
        {
          class: "nav_link nav_logo nav_request center",
          onClick: (event: Event) => requestClickEvent(event),
        },
        "Project request"
      )
    )
  );
};

export default Navbar;
