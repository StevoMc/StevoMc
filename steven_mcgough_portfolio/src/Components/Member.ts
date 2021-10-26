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
      React.createElement("h3", { class: "members_job" }, job),
      React.createElement("h1", { class: "user_info h1" }, name),
      React.createElement("h3", { class: "members_bio" }, bio)
    )
  );

export default Member;
