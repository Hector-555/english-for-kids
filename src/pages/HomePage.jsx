import React from "react";
import Main from "../components/Main/Main";
import './HomePage.css'

function HomePage() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Choose category</h2>
      </div>
      <div className="container">
      <Main />
    </div>
    </>
    
  );
}

export default HomePage;
