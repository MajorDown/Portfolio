import React, { useState, useEffect, useContext } from "react";
import SvgMaker from "../components/SvgMaker";
import Project from "../components/Project";
import { PortfolioContext } from "../App";

const Portfolio = () => {
  const data = useContext(PortfolioContext);
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
            {data.portfolio.openclassrooms.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                description={project.description}
                repository={project.repository}
                onClick={(e) =>
                  handleProjectClick(project.preview, project.site)
                }
              />
            ))}
          </div>
          <p className="folder" onClick={handleClick}>
            <SvgMaker item="folder" />
            <span>Projets Perso'</span>
          </p>
          <div className="content"></div>
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
