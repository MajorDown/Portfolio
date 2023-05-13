import React from "react";

const MainContainer = (props) => {
  return (
    <div id="mainContainer" className="box">
      {props.children}
    </div>
  );
};

export default MainContainer;
