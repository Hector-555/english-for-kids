/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import useAuth from "../../hooks/use-auth";
import { userActions } from "../../store/userSlice";
import "./Nav.css";
import burger from "./icons/Rectangle.png";

function Nav({ active, setActive, onCheck }) {
  const dispatch = useDispatch();
  const { isLoggedIn, email } = useAuth();
  const logoutHandler = () => {
    dispatch(userActions.removeUser());
  };

  const play = React.useRef()

  const [playMode, setPlayMode] = useState(false);
  const switchModeHandler = () => {
    setPlayMode((prev) => !prev);
    onCheck(play.current.className)
  };

  return isLoggedIn ? (
      <div className="nav-container">
        <motion.button
          type="button"
          className="nav__menu-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActive(!active)}
        >
          <img src={burger} alt="menu" />
        </motion.button>

        <div className="user-block">
          <p className="login-text">{email}</p>
          <button onClick={logoutHandler} type="button" className="form-btn">
            Выйти
          </button>
        </div>

        <div className="switch-container">
          <span ref={play} className={`switch-play ${playMode ? "" : "display-none"}`}>
            PLAY
          </span>
          <span className={`switch-train ${playMode ? "display-none" : ""}`}>
            TRAIN
          </span>
          <label id="switch" className="switch">
            <input type="checkbox" id="slider" onClick={switchModeHandler} />
            <span className="slider round" />
          </label>
        </div>
      </div>
    
  ) : (
    <Navigate to="login" />
  );
}

export default Nav;
