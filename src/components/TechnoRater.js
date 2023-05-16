import React from "react";

const TechnoRater = ({ techno, name, month, onMouseMove, onMouseOut }) => {
  function timeCalcul(date) {
    const [month, year] = date.split(".");
    const currentDate = new Date();
    const diffInMonths =
      (currentDate.getFullYear() - year) * 12 +
      (currentDate.getMonth() + 1 - month);
    return diffInMonths;
  }

  const months = timeCalcul(month);
  const width = `${months * 6}%`;

  const years = Math.floor(months / 12);
  const restOfMonths = Math.floor(months % 12);

  return (
    <figure className="techno-rater" name={name}>
      <img
        src={techno}
        alt={name}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      />
      <div className="techno-line" style={{ width }}>
        <p>
          {years > 0 ? `${years} an${years !== 1 ? "s" : ""} et ` : ""}
          {restOfMonths} mois
        </p>
      </div>
    </figure>
  );
};

export default TechnoRater;
