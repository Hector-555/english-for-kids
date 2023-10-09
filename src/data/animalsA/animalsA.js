import bird from "./img/bird.jpg";
import cat from "./img/cat.jpg";
import chick from "./img/chick.jpg";
import chicken from "./img/chicken.jpg";
import dog from "./img/dog.jpg";
import dolphin from "./img/dolphin.jpg";
import fish from "./img/fish1.jpg";
import frog from "./img/frog.jpg";

import birdAudio from "./audio/bird.mp3";
import catAudio from "./audio/cat.mp3";
import chickAudio from "./audio/chick.mp3";
import chickenAudio from "./audio/chicken.mp3";
import dogAudio from "./audio/dog.mp3";
import dolphinAudio from "./audio/dolphin.mp3";
import fishAudio from "./audio/fish.mp3";
import frogAudio from "./audio/frog.mp3";

const animalsA = [
  {
    title: "Bird",
    image: bird,
    titleRus: "Птица",
    audio: birdAudio,
    id: Math.random().toString(),
  },
  {
    title: "Cat",
    image: cat,
    titleRus: "Кот",
    audio: catAudio,
    id: Math.random().toString(),
  },
  {
    title: "Chick",
    image: chick,
    titleRus: "Птенец",
    audio: chickAudio,
    id: Math.random().toString(),
  },
  {
    title: "Chicken",
    image: chicken,
    titleRus: "Цыпленок",
    audio: chickenAudio,
    id: Math.random().toString(),
  },
  {
    title: "Dog",
    image: dog,
    titleRus: "Собака",
    audio: dogAudio,
    id: Math.random().toString(),
  },
  {
    title: "Dolphin",
    image: dolphin,
    titleRus: "Дельфин",
    audio: dolphinAudio,
    id: Math.random().toString(),
  },
  {
    title: "Fish",
    image: fish,
    titleRus: "Рыба",
    audio: fishAudio,
    id: Math.random().toString(),
  },
  {
    title: "Frog",
    image: frog,
    titleRus: "Лягушка",
    audio: frogAudio,
    id: Math.random().toString(),
  },
];

export default animalsA;
