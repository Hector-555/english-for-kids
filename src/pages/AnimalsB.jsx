import React from "react";
import CardItem from "../components/UI/CardItem";
import animalsB from "../data/animalsB/animalsB";

function AnimalsB() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Animals (set B)</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={animalsB[0].title}
          image={animalsB[0].image}
          titleRus={animalsB[0].titleRus}
          audio={animalsB[0].audio}
        />
        <CardItem
          title={animalsB[1].title}
          image={animalsB[1].image}
          titleRus={animalsB[1].titleRus}
          audio={animalsB[1].audio}
        />
        <CardItem
          title={animalsB[2].title}
          image={animalsB[2].image}
          titleRus={animalsB[2].titleRus}
          audio={animalsB[2].audio}
        />
        <CardItem
          title={animalsB[3].title}
          image={animalsB[3].image}
          titleRus={animalsB[3].titleRus}
          audio={animalsB[3].audio}
        />
        <CardItem
          title={animalsB[4].title}
          image={animalsB[4].image}
          titleRus={animalsB[4].titleRus}
          audio={animalsB[4].audio}
        />
        <CardItem
          title={animalsB[5].title}
          image={animalsB[5].image}
          titleRus={animalsB[5].titleRus}
          audio={animalsB[5].audio}
        />
        <CardItem
          title={animalsB[6].title}
          image={animalsB[6].image}
          titleRus={animalsB[6].titleRus}
          audio={animalsB[6].audio}
        />
        <CardItem
          title={animalsB[7].title}
          image={animalsB[7].image}
          titleRus={animalsB[7].titleRus}
          audio={animalsB[7].audio}
        />
      </div>
    </>
  );
}

export default AnimalsB;
