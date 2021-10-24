import React from "react";
import Member from "./Member";

type Member = {
  name: string;
  birthday: Date;
  job: string;
  country: string;
  profile: string;
  bio: string;
};

const Members = (members: [Member]) =>
  React.createElement(
    "div",
    { class: "row column" },
    React.createElement("h1", { class: "center row" }, "Members"),
    React.createElement(
      "div",
      { class: "members row center" },
      members?.map((member: Member) => {
        return Member(member.name, member.job, member.bio, member.profile);
      })
    )
  );

export default Members;
