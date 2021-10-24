import React from "react";

const Intro = (name: string, job: string, pic: string) =>
  React.createElement(
    "div",
    { class: "row column center padding_row" },
    React.createElement("img", {
      class: "hero_img_container margin_top_bottom",
      src: pic,
    }),
    React.createElement("h2", { class: "margin_top_bottom" }, name),
    React.createElement("h3", { class: "margin_top_bottom" }, job)
  );

export default Intro;
