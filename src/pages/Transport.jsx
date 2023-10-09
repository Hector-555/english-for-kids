import React from "react";
import CardItem from "../components/UI/CardItem";
import transport from "../data/transport/transport";

function Transport() {
  return (
    <>
      <div className="title-wrapper">
        <h2>Transport</h2>
      </div>
      <div className="main-container">
        <CardItem
          title={transport[0].title}
          image={transport[0].image}
          titleRus={transport[0].titleRus}
          audio={transport[0].audio}
        />
        <CardItem
          title={transport[1].title}
          image={transport[1].image}
          titleRus={transport[1].titleRus}
          audio={transport[1].audio}
        />
        <CardItem
          title={transport[2].title}
          image={transport[2].image}
          titleRus={transport[2].titleRus}
          audio={transport[2].audio}
        />
        <CardItem
          title={transport[3].title}
          image={transport[3].image}
          titleRus={transport[3].titleRus}
          audio={transport[3].audio}
        />
        <CardItem
          title={transport[4].title}
          image={transport[4].image}
          titleRus={transport[4].titleRus}
          audio={transport[4].audio}
        />
        <CardItem
          title={transport[5].title}
          image={transport[5].image}
          titleRus={transport[5].titleRus}
          audio={transport[5].audio}
        />
        <CardItem
          title={transport[6].title}
          image={transport[6].image}
          titleRus={transport[6].titleRus}
          audio={transport[6].audio}
        />
        <CardItem
          title={transport[7].title}
          image={transport[7].image}
          titleRus={transport[7].titleRus}
          audio={transport[7].audio}
        />
      </div>
    </>
  );
}

export default Transport;
