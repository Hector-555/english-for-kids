import dance from "./img/dance.jpg";
import dive from "./img/dive.jpg";
import draw from "./img/draw.jpg";
import fish from "./img/fish.jpg";
import fly from "./img/fly.jpg";
import hug from "./img/hug.jpg";
import jump from "./img/jump.jpg";
import open from "./img/open.jpg";

import danceAudio from "./audio/dance.mp3";
import diveAudio from "./audio/dive.mp3";
import drawAudio from "./audio/draw.mp3";
import fishAudio from "./audio/fish.mp3";
import flyAudio from "./audio/fly.mp3";
import hugAudio from "./audio/hug.mp3";
import jumpAudio from "./audio/jump.mp3";
import openAudio from "./audio/open.mp3";

const ActionsA = [
  {
    title: "Dance",
    image: dance,
    titleRus: "Танцевать",
    audio: danceAudio,
    id: Math.random().toString(),
  },
  {
    title: "Dive",
    image: dive,
    titleRus: "Нырять",
    audio: diveAudio,
    id: Math.random().toString(),
  },
  {
    title: "Draw",
    image: draw,
    titleRus: "Рисовать",
    audio: drawAudio,
    id: Math.random().toString(),
  },
  {
    title: "Fish",
    image: fish,
    titleRus: "Рыбачить",
    audio: fishAudio,
    id: Math.random().toString(),
  },
  {
    title: "Fly",
    image: fly,
    titleRus: "Летать",
    audio: flyAudio,
    id: Math.random().toString(),
  },
  {
    title: "Hug",
    image: hug,
    titleRus: "Обнимать",
    audio: hugAudio,
    id: Math.random().toString(),
  },
  {
    title: "Jump",
    image: jump,
    titleRus: "Прыгать",
    audio: jumpAudio,
    id: Math.random().toString(),
  },
  {
    title: "Open",
    image: open,
    titleRus: "Открыть",
    audio: openAudio,
    id: Math.random().toString(),
  },
];

export default ActionsA;
