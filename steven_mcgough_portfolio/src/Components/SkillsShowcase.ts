import { textAlign } from "@mui/system";
import React from "react";

const SkillsShowcase = (skills: any[]) =>
  React.createElement(
    "div",
    { class: "column" },
    React.createElement(
      "div",
      {
        class: "skill_container",
      },
      skills.map((x, index) =>
        React.createElement(
          "span",
          {
            key: index,
            class: "skill",
          },
          React.createElement(
            "img",
            {
              class: "skill_image",
              src: x.logo,
            },
            null
          ),
          React.createElement(
            "span",
            {
              class: "skill_info",
            },

            React.createElement(
              "p",
              {
                class: "skill_title",
              },
              x.title
            ),
            React.createElement(
              "p",
              {
                class: "skill_status",
              },
              x.status
            )
          )
        )
      )
    )
  );

export default SkillsShowcase;
