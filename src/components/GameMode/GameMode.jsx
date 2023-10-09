/* eslint-disable react/prop-types */
import React from "react";
import "./GameMode.css";

function GameMode({classCheck}) {
    const button = React.useRef()
    let textBtn

    if ((classCheck === 'switch-play display-none')) {
      textBtn = 'Start'
    }

    const clickHandler = () => {
        button.current.innerText = 'Repeat'
    }

  return (
    <div className={`title-wrapper ${(classCheck === 'switch-play display-none') ? "" : "display-none"}`}>
      <div className="stars-wrapper" />
      <button ref={button} type="button" className="start-game-btn" onClick={clickHandler}>{textBtn}</button>
    </div>
  );
}

export default GameMode;
