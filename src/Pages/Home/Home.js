import React from "react";
import Search from "./Search";
import Navigation from "../Header/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <div style={{ position: "relative", zIndex: "2 !important" }}>
        <Search />
      </div>
    </>
  );
};

export default Home;
