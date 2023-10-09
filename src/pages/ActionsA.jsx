import React from "react";
import CardItem from "../components/UI/CardItem";
import actionsA from "../data/actionsA/actionsA";

function ActionsA() {
  return (
    <>
    <div className="title-wrapper">
        <h2>Action (set A)</h2>
      </div>
    <div className="main-container">
      <CardItem
        title={actionsA[0].title}
        image={actionsA[0].image}
        titleRus={actionsA[0].titleRus}
        audio={actionsA[0].audio}
      />
      <CardItem
        title={actionsA[1].title}
        image={actionsA[1].image}
        titleRus={actionsA[1].titleRus}
        audio={actionsA[1].audio}
      />
      <CardItem
        title={actionsA[2].title}
        image={actionsA[2].image}
        titleRus={actionsA[2].titleRus}
        audio={actionsA[2].audio}
      />
      <CardItem
        title={actionsA[3].title}
        image={actionsA[3].image}
        titleRus={actionsA[3].titleRus}
        audio={actionsA[3].audio}
      />
      <CardItem
        title={actionsA[4].title}
        image={actionsA[4].image}
        titleRus={actionsA[4].titleRus}
        audio={actionsA[4].audio}
      />
      <CardItem
        title={actionsA[5].title}
        image={actionsA[5].image}
        titleRus={actionsA[5].titleRus}
        audio={actionsA[5].audio}
      />
      <CardItem
        title={actionsA[6].title}
        image={actionsA[6].image}
        titleRus={actionsA[6].titleRus}
        audio={actionsA[6].audio}
      />
      <CardItem
        title={actionsA[7].title}
        image={actionsA[7].image}
        titleRus={actionsA[7].titleRus}
        audio={actionsA[7].audio}
      />
    </div>
    </>
    
  );
}

export default ActionsA;
