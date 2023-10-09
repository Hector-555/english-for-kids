import React from "react";
import CardItem from "../components/UI/CardItem";
import food from "../data/food/food";

function Food() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Food</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={food[0].title}
          image={food[0].image}
          titleRus={food[0].titleRus}
          audio={food[0].audio}
        />
        <CardItem
          title={food[1].title}
          image={food[1].image}
          titleRus={food[1].titleRus}
          audio={food[1].audio}
        />
        <CardItem
          title={food[2].title}
          image={food[2].image}
          titleRus={food[2].titleRus}
          audio={food[2].audio}
        />
        <CardItem
          title={food[3].title}
          image={food[3].image}
          titleRus={food[3].titleRus}
          audio={food[3].audio}
        />
        <CardItem
          title={food[4].title}
          image={food[4].image}
          titleRus={food[4].titleRus}
          audio={food[4].audio}
        />
        <CardItem
          title={food[5].title}
          image={food[5].image}
          titleRus={food[5].titleRus}
          audio={food[5].audio}
        />
        <CardItem
          title={food[6].title}
          image={food[6].image}
          titleRus={food[6].titleRus}
          audio={food[6].audio}
        />
        <CardItem
          title={food[7].title}
          image={food[7].image}
          titleRus={food[7].titleRus}
          audio={food[7].audio}
        />
      </div>
    </>
  );
}

export default Food;
