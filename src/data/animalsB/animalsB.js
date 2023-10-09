import giraffe from "./img/giraffe.jpg";
import horse from "./img/horse.jpg";
import lion from "./img/lion.jpg";
import mouse from "./img/mouse.jpg";
import pig from "./img/pig.jpg";
import rabbit from "./img/rabbit.jpg";
import sheep from "./img/sheep.jpg";
import turtle from "./img/turtle.jpg";

import giraffeAudio from "./audio/giraffe.mp3";
import horseAudio from "./audio/horse.mp3";
import lionAudio from "./audio/lion.mp3";
import mouseAudio from "./audio/mouse.mp3";
import pigAudio from "./audio/pig.mp3";
import rabbitAudio from "./audio/rabbit.mp3";
import sheepAudio from "./audio/sheep.mp3";
import turtleAudio from "./audio/turtle.mp3";

const animalsB = [
  {
    title: "Giraffe",
    image: giraffe,
    titleRus: "Жираф",
    audio: giraffeAudio,
    id: Math.random().toString(),
  },
  {
    title: "Horse",
    image: horse,
    titleRus: "Лошадь",
    audio: horseAudio,
    id: Math.random().toString(),
  },
  {
    title: "Lion",
    image: lion,
    titleRus: "Лев",
    audio: lionAudio,
    id: Math.random().toString(),
  },
  {
    title: "Mouse",
    image: mouse,
    titleRus: "Мышь",
    audio: mouseAudio,
    id: Math.random().toString(),
  },
  {
    title: "Pig",
    image: pig,
    titleRus: "Свинья",
    audio: pigAudio,
    id: Math.random().toString(),
  },
  {
    title: "Rabbit",
    image: rabbit,
    titleRus: "Кролик",
    audio: rabbitAudio,
    id: Math.random().toString(),
  },
  {
    title: "Sheep",
    image: sheep,
    titleRus: "Овца",
    audio: sheepAudio,
    id: Math.random().toString(),
  },
  {
    title: "Turtle",
    image: turtle,
    titleRus: "Черепаха",
    audio: turtleAudio,
    id: Math.random().toString(),
  },
];

export default animalsB;
