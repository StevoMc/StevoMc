import React from "react";

const PictureShowcase = (pictureLinks: string[]) =>
  React.createElement(
    "div",
    {
      class: "picture_showcase_container",
      style: {},
    },
    pictureLinks.map((link: string, index: number) =>
      React.createElement(
        "img",
        {
          key: index,
          class: "picture_showcase_image",
          src: link,
        },
        null
      )
    )
  );

export default PictureShowcase;
