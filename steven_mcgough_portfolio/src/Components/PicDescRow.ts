import React from "react";

const PicDescRow = (description: string, pic: string) =>
  React.createElement(
    "div",
    { class: "row" },
    React.createElement("img", {
      class: "user_profile",
      src: pic,
    }),
    React.createElement("p", { class: "user_description center" }, description)
  );

export default PicDescRow;
