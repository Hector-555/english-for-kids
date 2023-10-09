import React from "react";
import CardItem from "../components/UI/CardItem";
import actionsB from "../data/actionsB/actionsB";

function ActionsB() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Action (set B)</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={actionsB[0].title}
          image={actionsB[0].image}
          titleRus={actionsB[0].titleRus}
          audio={actionsB[0].audio}
        />
        <CardItem
          title={actionsB[1].title}
          image={actionsB[1].image}
          titleRus={actionsB[1].titleRus}
          audio={actionsB[1].audio}
        />
        <CardItem
          title={actionsB[2].title}
          image={actionsB[2].image}
          titleRus={actionsB[2].titleRus}
          audio={actionsB[2].audio}
        />
        <CardItem
          title={actionsB[3].title}
          image={actionsB[3].image}
          titleRus={actionsB[3].titleRus}
          audio={actionsB[3].audio}
        />
        <CardItem
          title={actionsB[4].title}
          image={actionsB[4].image}
          titleRus={actionsB[4].titleRus}
          audio={actionsB[4].audio}
        />
        <CardItem
          title={actionsB[5].title}
          image={actionsB[5].image}
          titleRus={actionsB[5].titleRus}
          audio={actionsB[5].audio}
        />
        <CardItem
          title={actionsB[6].title}
          image={actionsB[6].image}
          titleRus={actionsB[6].titleRus}
          audio={actionsB[6].audio}
        />
        <CardItem
          title={actionsB[7].title}
          image={actionsB[7].image}
          titleRus={actionsB[7].titleRus}
          audio={actionsB[7].audio}
        />
      </div>
    </>
  );
}

export default ActionsB;
