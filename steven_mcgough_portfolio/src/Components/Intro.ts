import React from "react";

const requestClickEvent = (event: Event) => {
  alert("Click");
};

const Intro = (name: string, profile: string, bio: string, job: string) => {
  return React.createElement(
    "div",
    { class: "center column intro" },
    React.createElement("img", {
      class: "hero_img_container center",
      alt: name + "Logo",
      src: profile,
    }),
    React.createElement(
      "div",
      { class: "member_info center" },
      // React.createElement("h2", { class: "margin_top_bottom center" }, name),
      React.createElement(
        "div",
        { class: "user_info_container", id: "intro_user_info" },
        React.createElement("h3", { class: "user_info", id: "intro_job" }, job),
        React.createElement("h2", { class: "user_info" }, name),
        React.createElement("h3", { class: "user_info", id: "intro_bio" }, bio)
      )
    ),
    React.createElement(
      "div",
      {
        id: "request",
        class: "nav_link nav_logo nav_request center",
        onClick: (event: Event) => requestClickEvent(event),
      },
      "Request your project now"
    )
  );
};

export default Intro;
