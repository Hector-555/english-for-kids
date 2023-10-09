import React from "react";
import CardItem from "../components/UI/CardItem";
import animalsA from "../data/animalsA/animalsA";

function AnimalsA() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Animals (set A)</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={animalsA[0].title}
          image={animalsA[0].image}
          titleRus={animalsA[0].titleRus}
          audio={animalsA[0].audio}
        />
        <CardItem
          title={animalsA[1].title}
          image={animalsA[1].image}
          titleRus={animalsA[1].titleRus}
          audio={animalsA[1].audio}
        />
        <CardItem
          title={animalsA[2].title}
          image={animalsA[2].image}
          titleRus={animalsA[2].titleRus}
          audio={animalsA[2].audio}
        />
        <CardItem
          title={animalsA[3].title}
          image={animalsA[3].image}
          titleRus={animalsA[3].titleRus}
          audio={animalsA[3].audio}
        />
        <CardItem
          title={animalsA[4].title}
          image={animalsA[4].image}
          titleRus={animalsA[4].titleRus}
          audio={animalsA[4].audio}
        />
        <CardItem
          title={animalsA[5].title}
          image={animalsA[5].image}
          titleRus={animalsA[5].titleRus}
          audio={animalsA[5].audio}
        />
        <CardItem
          title={animalsA[6].title}
          image={animalsA[6].image}
          titleRus={animalsA[6].titleRus}
          audio={animalsA[6].audio}
        />
        <CardItem
          title={animalsA[7].title}
          image={animalsA[7].image}
          titleRus={animalsA[7].titleRus}
          audio={animalsA[7].audio}
        />
      </div>
    </>
  );
}

export default AnimalsA;
