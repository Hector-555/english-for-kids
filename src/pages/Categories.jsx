import React from "react";
import Card from "../components/UI/Card";
import categories from "../data/categories/categories";
import rotate from "../components/UI/icons/rotate-btn.png";

function Categories() {
  return (
    <div className="main-container">
      <Card>
        {categories.map((category) => (
          <div className="card-container" key={category.id}>
            <div className="card-side card-side-front">
              <img src={category.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{category.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={category.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{category.title}</h3>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Categories;
