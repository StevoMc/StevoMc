import React from "react";
import Member from "./Member";

type MemberType = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  profile: string;
  bio: string;
};

const Members = (members: MemberType[]) =>
  React.createElement(
    "div",
    { class: "column" },
    React.createElement(
      "span",
      { class: "content_span" },
      React.createElement("h2", { class: "content_title" }, "Team"),
      React.createElement(
        "div",
        { class: "member_container center" },
        members?.map((member: MemberType) =>
          Member(member.name, member.job, member.bio, member.profile)
        )
      )
    )
  );

export default Members;
