import React from "react";

const H1Row = (name: string) =>
  React.createElement(
    "div",
    { id: "banner", class: "user_name_container fixed" },
    React.createElement("h1", { class: "user_name" }, name)
  );

export default H1Row;
