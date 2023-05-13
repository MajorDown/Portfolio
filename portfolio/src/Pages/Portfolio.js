import React, { useState, useEffect } from "react";
import SvgMaker from "../components/SvgMaker";
import Project from "../components/Project";

const Portfolio = () => {
  const [previewImage, setPreviewImage] = useState([""]);
  const [previewerUrl, setPreviewerUrl] = useState(["#"]);

  useEffect(() => {
    const previewer = document.getElementById("portfolio-preview");
    if (previewImage && previewImage.length === 1) {
      previewer.classList.remove("active");
    } else if (previewImage.length > 1) {
      previewer.classList.add("active");
    }
  }, [previewImage]);

  useEffect(() => {
    const link = document.getElementById("projectLink");
    if (previewerUrl[previewerUrl.length - 1] === "") {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  }, [previewerUrl]);

  const handleClick = (event) => {
    const clickedParagraph = event.target;
    const divRef = clickedParagraph.closest("p").nextElementSibling;

    if (divRef.style.display === "none" || divRef.style.display === "") {
      divRef.style.display = "block";
    } else {
      divRef.style.display = "none";
    }
  };

  const removeItemFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    return [...array];
  };

  const handleProjectClick = (imageUrl, pageUrl) => {
    if (!previewImage.includes(imageUrl)) {
      setPreviewImage((array) => [...array, imageUrl]);
      setPreviewerUrl((array) => [...array, pageUrl]);
    } else if (previewImage.includes(imageUrl)) {
      const newPreviewImage = removeItemFromArray(previewImage, imageUrl);
      setPreviewImage(newPreviewImage);
      const newPreviewerUrl = removeItemFromArray(previewerUrl, pageUrl);
      setPreviewerUrl(newPreviewerUrl);
    }
  };

  return (
    <section id="portfolio">
      <h2>Mon Portfolio</h2>
      <div id="portfolio-container">
        <article id="folderTree">
          <p className="folder" onClick={handleClick}>
            <SvgMaker item="folder" />
            <span>Projets OpenClassRooms</span>
          </p>
          <div className="content">
            <Project
              name="P2 - Booki"
              description="mission : intégration responsive d'une page en html/css à partir d'une maquette figma"
              repository="https://github.com/MajorDown/Booki.git"
              onClick={(e) =>
                handleProjectClick(
                  "/images/projectImages/booki.jpg",
                  "https://majordown.github.io/Booki/"
                )
              }
            />
            <Project
              name="P3 - Sophie Bluel"
              description="mission : rendre dynamique une page web et la faire communiquer avec une API"
              repository="https://github.com/MajorDown/Sophie-Bluel.git"
              onClick={(e) =>
                handleProjectClick("/images/projectImages/no_preview.jpg", "")
              }
            />
            <Project
              name="P5 - Nina Carducci"
              description="mission : débug, optimisation du référencement SEO et des performances du site"
              repository="https://github.com/MajorDown/Nina_Carducci.git"
              onClick={(e) =>
                handleProjectClick(
                  "/images/projectImages/no_preview.jpg",
                  "https://majordown.github.io/Nina_Carducci/"
                )
              }
            />
            <Project
              name="P6 - Kasa"
              description="mission : création d'une application React capable de communiquer avec une API"
              repository="https://github.com/MajorDown/Kasa.git"
              onClick={(e) =>
                handleProjectClick("/images/projectImages/no_preview.jpg", "")
              }
            />
            <Project
              name="P7 - Mon Vieux Grimoire"
              description="mission : coté Backend, création d'une API CRUD sécurisée sous NodeJS"
              repository="https://github.com/MajorDown/mon_vieux_grimoire.git"
              onClick={(e) =>
                handleProjectClick("/images/projectImages/no_preview.jpg", "")
              }
            />
          </div>
        </article>
        <article id="portfolio-preview">
          <img src={previewImage[previewImage.length - 1]} alt="preview" />
          <a
            id="projectLink"
            href={previewerUrl[previewerUrl.length - 1]}
            target="_blank"
          >
            lien vers le projet
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
