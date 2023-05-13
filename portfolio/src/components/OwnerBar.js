import React, { useState, useContext } from "react";
import photo from "../images/photo.jpg";
import { calculAge } from "../utils/utils";
import SvgMaker from "./SvgMaker";
import { PortfolioContext } from "../App";

const OwnerBar = () => {
  const data = useContext(PortfolioContext);
  const [interestName, setInterestName] = useState("");

  function handlePathClick(event) {
    const name = event.target.closest("svg").getAttribute("name");
    setInterestName(name);
    setTimeout(() => {
      setInterestName("");
    }, 3000);
  }

  function handlePathMouseMove(event) {
    const name = event.target.closest("svg").getAttribute("name");
    setInterestName(name);
  }

  function handlePathMouseOut(event) {
    setInterestName("");
  }

  return (
    <section id="sideBar" className="box">
      <div id="photo">
        <img src={photo} alt="profil" />
      </div>
      <div id="informations">
        <p className="infos birthday">
          <SvgMaker item="anniversaire" />
          <span>{calculAge(data.ownBar.birth) + "ans"}</span>
        </p>
        <p className="infos residence">
          <SvgMaker item="residence" />
          <span>{data.ownBar.place}</span>
        </p>
        <p className="infos phone">
          <SvgMaker item="telephone" />
          <span>{data.ownBar.tel}</span>
        </p>
        <p className="infos mail">
          <SvgMaker item="mail" />
          <span>{data.ownBar.mail}</span>
        </p>
        <p className="infos vehicule">
          <SvgMaker item="voiture" />
          <span>{data.ownBar.car}</span>
        </p>
        <p className="infos diplome">
          <SvgMaker item="diplome" />
          <span>{data.ownBar.diplome}</span>
        </p>
      </div>
      <div id="interest">
        <p>{"~ Centres d'intérêts ~"}</p>
        <div className="interest-list">
          <SvgMaker
            name={data.ownBar.interest[0]}
            item="semi"
            onClick={handlePathClick}
            onMouseMove={handlePathMouseMove}
            onMouseOut={handlePathMouseOut}
          />
          <SvgMaker
            name={data.ownBar.interest[1]}
            item="tente"
            onClick={handlePathClick}
            onMouseMove={handlePathMouseMove}
            onMouseOut={handlePathMouseOut}
          />
          <SvgMaker
            name={data.ownBar.interest[2]}
            item="pizza"
            onClick={handlePathClick}
            onMouseMove={handlePathMouseMove}
            onMouseOut={handlePathMouseOut}
          />
          <SvgMaker
            name={data.ownBar.interest[3]}
            item="monument"
            onClick={handlePathClick}
            onMouseMove={handlePathMouseMove}
            onMouseOut={handlePathMouseOut}
          />
          <SvgMaker
            name={data.ownBar.interest[4]}
            item="guitar"
            onClick={handlePathClick}
            onMouseMove={handlePathMouseMove}
            onMouseOut={handlePathMouseOut}
          />
        </div>
        {interestName && <p id="interest-name">{interestName}</p>}
      </div>
    </section>
  );
};

export default OwnerBar;
