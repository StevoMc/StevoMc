import React from "react";

const Member = (name: string, job: string, bio: string, pic: string) =>
  React.createElement(
    "div",
    { class: "center member" },
    React.createElement("img", {
      class: "hero_img_container  center",
      src: pic,
    }),
    React.createElement(
      "div",
      { class: "user_info_container" },
      React.createElement("h3", { class: "user_info" }, job),
      React.createElement("h2", { class: "user_info" }, name),
      React.createElement("h3", { class: "user_info" }, bio)
    )
  );

export default Member;
