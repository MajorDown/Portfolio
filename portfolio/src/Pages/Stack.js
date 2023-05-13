import React, { useState } from "react";
import TechnoRater from "../components/TechnoRater";
import html5 from "../images/stackIcons/html5.png";
import css3 from "../images/stackIcons/css3.png";
import javascript from "../images/stackIcons/javascript.png";
import typescript from "../images/stackIcons/typescript.png";
import react from "../images/stackIcons/react.png";
import nodejs from "../images/stackIcons/nodejs.png";
import expressjs from "../images/stackIcons/expressjs.png";
import mongodb from "../images/stackIcons/mongodb.png";
import php from "../images/stackIcons/php.png";
import sql from "../images/stackIcons/sql.png";
import wordpress from "../images/stackIcons/wordpress.png";
import flutter from "../images/stackIcons/flutter.png";
import reactNative from "../images/stackIcons/react-native.png";
import vsCode from "../images/stackIcons/vs-code.png";
import postman from "../images/stackIcons/postman.png";
import windows from "../images/stackIcons/windows.png";
import ubuntu from "../images/stackIcons/ubuntu.png";
import figma from "../images/stackIcons/figma.png";
import git from "../images/stackIcons/git.png";
import lighthouse from "../images/stackIcons/lighthouse.png";
import trello from "../images/stackIcons/trello.png";

const Stack = () => {
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
            <TechnoRater
              techno={html5}
              name="html5"
              month="03.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={css3}
              name="css3"
              month="03.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={javascript}
              name="javascript"
              month="07.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={typescript}
              name="typescript"
              month="04.2023"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={react}
              name="react js"
              month="02.2023"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={nodejs}
              name="node js"
              month="12.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={expressjs}
              name="express js"
              month="12.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={mongodb}
              name="mongodb"
              month="12.2022"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={php}
              name="php"
              month="03.2023"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
            <TechnoRater
              techno={sql}
              name="sql"
              month="03.2023"
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            />
          </div>
        </article>
        <div id="divider1"></div>
        <article id="skills">
          <h3>Mes Skills :</h3>
          <div id="skills-list">
            <ul>
              <li>Conception / Intégration de maquettes</li>
              <li>Mise en page responsive et dynamique</li>
              <li>
                Réalisation de site standard ou de Single Page Application
              </li>
              <li>versionning des projets via Git / GitHub</li>
              <li>
                Debug et optimisation des performances / référencement SEO
              </li>
              <li>Mise en oeuvre d'un backend avec CRUD</li>
              <li>Gestion de VPS, mise en ligne</li>
              <li>Méthodologie Agile</li>
              <li>Veille technologique</li>
            </ul>
            <p>...Mes points forts ?</p>
            <ul>
              <li>Ma curiosité, ma capacité d'apprentissage</li>
              <li>Mon sens du relationnel, de l'écoute active</li>
              <li>Mon adaptabilité et ma réactivité</li>
              <li>Mon sens absolument évident de la modestie</li>
            </ul>
            <p>...Mes points faibles ?</p>
            <ul>
              <li>Mes chevilles. Elles ont tendances à gonfler, parfois.</li>
              <li>...Mon sens de l'humour</li>
            </ul>
          </div>
        </article>
      </div>
      <div id="divider2"></div>
      <div id="toolslearnings">
        <article id="tools">
          <h3>Mes outils de travail :</h3>
          <div id="tools-list">
            <div>
              <img src={windows} alt="windows" />
              <p>Windows</p>
            </div>
            <div>
              <img src={ubuntu} alt="ubuntu" />
              <p>Ubuntu</p>
            </div>
            <div>
              <img src={vsCode} alt="vs-code" />
              <p>VS Code</p>
            </div>
            <div>
              <img src={postman} alt="postman" />
              <p>Postman</p>
            </div>
            <div>
              <img src={git} alt="git" />
              <p>Git / Github</p>
            </div>
            <div>
              <img src={lighthouse} alt="lightouse" />
              <p>Lighthouse</p>
            </div>
            <div>
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
            <div>
              <img src={trello} alt="trello" />
              <p>Trello</p>
            </div>
          </div>
        </article>
        <div id="divider3"></div>
        <article id="learnings">
          <h3>Ce que j'étudie en ce moment :</h3>
          <div id="learnings-list">
            <div>
              <img src={wordpress} alt="wordpress" />
              <p>Wordpress</p>
            </div>
            <div>
              <img src={reactNative} alt="react-native" />
              <p>React Native</p>
            </div>
            <div>
              <img src={flutter} alt="flutter" />
              <p>Flutter</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Stack;
