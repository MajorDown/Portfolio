import React from "react";
import SvgMaker from "./SvgMaker";

const Project = (props) => {
  const handleClick = (event) => {
    const clickedParagraph = event.target;
    const divRef = clickedParagraph.closest("p").nextElementSibling;

    if (divRef.style.display === "none" || divRef.style.display === "") {
      divRef.style.display = "block";
    } else {
      divRef.style.display = "none";
    }
  };

  return (
    <figure onClick={props.onClick}>
      <p className="project" onClick={handleClick}>
        {"|__"}
        <SvgMaker item="page" />
        <span>{props.name}</span>
      </p>
      <div className="content">
        <p className="infos desc">
          {"|__"}
          <SvgMaker item="description" />
          <span>{props.description}</span>
        </p>
        <p className="infos code">
          {"|__"}
          <SvgMaker item="code" />
          <span>
            <a href={props.repository} target="_blank">
              {props.repository}
            </a>
          </span>
        </p>
      </div>
    </figure>
  );
};

export default Project;
