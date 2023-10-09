import apple from "./img/apple.jpg";
import bread from "./img/bread.jpg";
import cheese from "./img/cheese.jpg";
import cucumber from "./img/cucumber.jpg";
import egg from "./img/egg.jpg";
import grape from "./img/grape.jpg";
import pear from "./img/pear.jpg";
import tomato from "./img/tomato.jpg";

import appleAudio from "./audio/apple.mp3";
import breadAudio from "./audio/bread.mp3";
import cheeseAudio from "./audio/cheese.mp3";
import cucumberAudio from "./audio/cucumber.mp3";
import eggAudio from "./audio/egg.mp3";
import grapeAudio from "./audio/grape.mp3";
import pearAudio from "./audio/pear.mp3";
import tomatoAudio from "./audio/tomato.mp3";

const food = [
  {
    title: "Apple",
    image: apple,
    titleRus: "Яблоко",
    audio: appleAudio,
    id: Math.random().toString(),
  },
  {
    title: "Bread",
    image: bread,
    titleRus: "Хлеб",
    audio: breadAudio,
    id: Math.random().toString(),
  },
  {
    title: "Cheese",
    image: cheese,
    titleRus: "Сыр",
    audio: cheeseAudio,
    id: Math.random().toString(),
  },
  {
    title: "Cucumber",
    image: cucumber,
    titleRus: "Огурец",
    audio: cucumberAudio,
    id: Math.random().toString(),
  },
  {
    title: "Egg",
    image: egg,
    titleRus: "Яйцо",
    audio: eggAudio,
    id: Math.random().toString(),
  },
  {
    title: "Grape",
    image: grape,
    titleRus: "Виноград",
    audio: grapeAudio,
    id: Math.random().toString(),
  },
  {
    title: "Pear",
    image: pear,
    titleRus: "Груша",
    audio: pearAudio,
    id: Math.random().toString(),
  },
  {
    title: "Tomato",
    image: tomato,
    titleRus: "Помидор",
    audio: tomatoAudio,
    id: Math.random().toString(),
  },
];

export default food;
