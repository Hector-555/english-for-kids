import React from "react";
import CardItem from "../components/UI/CardItem";
import clothes from "../data/clothes/clothes";

function Clothes() {
  return (
    <>
    <div className="title-wrapper">
        <h2>Clothes</h2>
      </div>
    <div className="main-container">
      <CardItem
        title={clothes[0].title}
        image={clothes[0].image}
        titleRus={clothes[0].titleRus}
        audio={clothes[0].audio}
      />
      <CardItem
        title={clothes[1].title}
        image={clothes[1].image}
        titleRus={clothes[1].titleRus}
        audio={clothes[1].audio}
      />
      <CardItem
        title={clothes[2].title}
        image={clothes[2].image}
        titleRus={clothes[2].titleRus}
        audio={clothes[2].audio}
      />
      <CardItem
        title={clothes[3].title}
        image={clothes[3].image}
        titleRus={clothes[3].titleRus}
        audio={clothes[3].audio}
      />
      <CardItem
        title={clothes[4].title}
        image={clothes[4].image}
        titleRus={clothes[4].titleRus}
        audio={clothes[4].audio}
      />
      <CardItem
        title={clothes[5].title}
        image={clothes[5].image}
        titleRus={clothes[5].titleRus}
        audio={clothes[5].audio}
      />
      <CardItem
        title={clothes[6].title}
        image={clothes[6].image}
        titleRus={clothes[6].titleRus}
        audio={clothes[6].audio}
      />
      <CardItem
        title={clothes[7].title}
        image={clothes[7].image}
        titleRus={clothes[7].titleRus}
        audio={clothes[7].audio}
      />
    </div>
    </>
    
  );
}

export default Clothes;
