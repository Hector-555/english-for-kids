import angry from "./img/angry.jpg";
import cry from "./img/cry.jpg";
import happy from "./img/happy.jpg";
import laugh from "./img/laugh.jpg";
import sad from "./img/sad.jpg";
import scared from "./img/scared.jpg";
import smile from "./img/smile.jpg";
import surprised from "./img/surprised.jpg";

import angryAudio from "./audio/angry.mp3";
import cryAudio from "./audio/cry.mp3";
import happyAudio from "./audio/happy.mp3";
import laughAudio from "./audio/laugh.mp3";
import sadAudio from "./audio/sad.mp3";
import scaredAudio from "./audio/scared.mp3";
import smileAudio from "./audio/smile.mp3";
import surprisedAudio from "./audio/surprised.mp3";

const emotions = [
  {
    title: "Angry",
    image: angry,
    titleRus: "Сердиться",
    audio: angryAudio,
    id: Math.random().toString(),
  },
  {
    title: "Cry",
    image: cry,
    titleRus: "Плакать",
    audio: cryAudio,
    id: Math.random().toString(),
  },
  {
    title: "Happy",
    image: happy,
    titleRus: "Счастливый",
    audio: happyAudio,
    id: Math.random().toString(),
  },
  {
    title: "Laugh",
    image: laugh,
    titleRus: "Смеяться",
    audio: laughAudio,
    id: Math.random().toString(),
  },
  {
    title: "Sad",
    image: sad,
    titleRus: "Грустить",
    audio: sadAudio,
    id: Math.random().toString(),
  },
  {
    title: "Scared",
    image: scared,
    titleRus: "Испугаться",
    audio: scaredAudio,
    id: Math.random().toString(),
  },
  {
    title: "Smile",
    image: smile,
    titleRus: "Улыбаться",
    audio: smileAudio,
    id: Math.random().toString(),
  },
  {
    title: "Surprised",
    image: surprised,
    titleRus: "Удивиться",
    audio: surprisedAudio,
    id: Math.random().toString(),
  },
];

export default emotions;
