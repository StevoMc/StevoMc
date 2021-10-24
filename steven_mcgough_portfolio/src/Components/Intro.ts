import React from "react";

const Intro = (name: string, job: string, bio: string, pic: string) =>
  React.createElement(
    "div",
    { class: "column center intro" },
    React.createElement("img", {
      class: "hero_img_container center",
      src: pic,
    }),
    React.createElement(
      "div",
      { class: "user_info" },
      React.createElement("h3", { class: "center" }, job),
      // React.createElement("h2", { class: "margin_top_bottom center" }, name),
      React.createElement("p", { class: "margin_top_bottom center" }, bio)
    )
  );

export default Intro;
