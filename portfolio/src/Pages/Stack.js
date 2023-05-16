import React, { useState, useContext } from "react";
import TechnoRater from "../components/TechnoRater";
import { PortfolioContext } from "../App";

const Stack = () => {
  const data = useContext(PortfolioContext);
  const [technoFocus, setTechnoFocus] = useState("");

  function handleMouseMove(event) {
    const name = event.target.getAttribute("alt");
    setTechnoFocus(name);
  }

  function handleMouseOut(event) {
    setTechnoFocus("");
  }

  return (
    <section id="stack">
      <h2>Ma boite à outil</h2>
      <div id="technoskills">
        <article id="stack-technos">
          <h3>Mes technos : {technoFocus}</h3>
          <div id="technos-list">
            {data.stack.technos.map((techno, index) => (
              <TechnoRater
                key={index}
                techno={techno.logo}
                name={techno.name}
                month={techno.since}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
              />
            ))}
          </div>
        </article>
        <div id="divider1"></div>
        <article id="skills">
          <h3>Mes Skills :</h3>
          <div id="skills-list">
            <ul>
              {data.stack.skills.skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p>...Mes points forts ?</p>
            <ul>
              {data.stack.skills.positiveList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p>...Mes points faibles ?</p>
            <ul>
              {data.stack.skills.negativeList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <div id="divider2"></div>
      <div id="toolslearnings">
        <article id="tools">
          <h3>Mes outils de travail :</h3>
          <div id="tools-list">
            {data.stack.tools.map((tool, index) => (
              <div key={index}>
                <img src={tool.logo} alt={tool.name} />
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </article>
        <div id="divider3"></div>
        <article id="learnings">
          <h3>Ce que j'étudie en ce moment :</h3>
          <div id="learnings-list">
            {data.stack.learnings.map((techno, index) => (
              <div key={index}>
                <img src={techno.logo} alt={techno.name} />
                <p>{techno.name}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Stack;
