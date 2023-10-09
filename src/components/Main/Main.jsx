/* eslint-disable no-nested-ternary */
import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import "./Main.css";
import categories from "../../data/categories/categories";

function Main() {
  return (
    <div className="main-container">
      <Card>
        {categories.map((category) => (
          <NavLink
            to={
              category.title === "Animals (set A)"
                ? "animals-1"
                : category.title === "Animals (set B)"
                ? "animals-2"
                : category.title === "Clothes"
                ? "clothes"
                : category.title === "Emotions"
                ? "emotions"
                : category.title === "Action (set A)"
                ? "actions-1"
                : category.title === "Action (set B)"
                ? "actions-2"
                : category.title === "Transport"
                ? "transport"
                : "food"
            }
          >
            <div className="card-container" key={category.id}>
              <div className="card-side">
                <img
                  src={category.image}
                  alt=""
                  className="card-container__img"
                />
                <h3 className="card-container__title">{category.title}</h3>
              </div>
            </div>
          </NavLink>
        ))}
      </Card>
    </div>
  );
}

export default Main;
