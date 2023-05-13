import React from "react";
import { Routes, Route } from "react-router-dom";
import Presentation from "../Pages/Presentation";
import Error404 from "../Pages/Error404";
import Stack from "../Pages/Stack";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route exact path={"/"} Component={Presentation} />
      <Route exact path={"/stack"} Component={Stack} />
      <Route exact path="/portfolio" Component={Portfolio} />
      <Route exact path="/contact" Component={Contact} />
      <Route path="*" Component={Error404} />
    </Routes>
  );
};

export default Router;
