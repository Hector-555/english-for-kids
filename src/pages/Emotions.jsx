import React from "react";
import CardItem from "../components/UI/CardItem";
import emotions from "../data/emotions/emotions";

function Emotions() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Emotions</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={emotions[0].title}
          image={emotions[0].image}
          titleRus={emotions[0].titleRus}
          audio={emotions[0].audio}
        />
        <CardItem
          title={emotions[1].title}
          image={emotions[1].image}
          titleRus={emotions[1].titleRus}
          audio={emotions[1].audio}
        />
        <CardItem
          title={emotions[2].title}
          image={emotions[2].image}
          titleRus={emotions[2].titleRus}
          audio={emotions[2].audio}
        />
        <CardItem
          title={emotions[3].title}
          image={emotions[3].image}
          titleRus={emotions[3].titleRus}
          audio={emotions[3].audio}
        />
        <CardItem
          title={emotions[4].title}
          image={emotions[4].image}
          titleRus={emotions[4].titleRus}
          audio={emotions[4].audio}
        />
        <CardItem
          title={emotions[5].title}
          image={emotions[5].image}
          titleRus={emotions[5].titleRus}
          audio={emotions[5].audio}
        />
        <CardItem
          title={emotions[6].title}
          image={emotions[6].image}
          titleRus={emotions[6].titleRus}
          audio={emotions[6].audio}
        />
        <CardItem
          title={emotions[7].title}
          image={emotions[7].image}
          titleRus={emotions[7].titleRus}
          audio={emotions[7].audio}
        />
      </div>
    </>
  );
}

export default Emotions;
