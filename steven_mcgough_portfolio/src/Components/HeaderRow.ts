import React from "react";

const HearderRow = (name: string) =>
  React.createElement(
    "div",
    { class: "user_name_container" },
    React.createElement("h1", { class: "user_name" }, name)
  );

export default HearderRow;
