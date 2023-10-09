/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Menu.css";
import cross from "./icons/cross.png";

function Menu({ active, setActive }) {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <motion.button
          type="button"
          className="close-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActive(!active)}
        >
          <img src={cross} alt="close" />
        </motion.button>
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actions-1"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Action (set A)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actions-2"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Action (set B)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animals-1"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Animals (set A)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animals-2"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Animals (set B)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/emotions"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Emotions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transport"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Transport
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food"
              className="nav-menu__link"
              onClick={() => setActive(!active)}
            >
              Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
