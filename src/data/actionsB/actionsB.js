import play from "./img/play.jpg";
import point from "./img/point.jpg";
import ride from "./img/ride.jpg";
import run from "./img/run.jpg";
import sing from "./img/sing.jpg";
import skip from "./img/skip.jpg";
import swim from "./img/swim.jpg";
import tired from "./img/tired.jpg";

import playAudio from "./audio/play.mp3";
import pointAudio from "./audio/point.mp3";
import rideAudio from "./audio/ride.mp3";
import runAudio from "./audio/run.mp3";
import singAudio from "./audio/sing.mp3";
import skipAudio from "./audio/skip.mp3";
import swimAudio from "./audio/swim.mp3";
import tiredAudio from "./audio/tired.mp3";

const ActionsA = [
  {
    title: "Play",
    image: play,
    titleRus: "Играть",
    audio: playAudio,
    id: Math.random().toString(),
  },
  {
    title: "Point",
    image: point,
    titleRus: "Указывать",
    audio: pointAudio,
    id: Math.random().toString(),
  },
  {
    title: "Ride",
    image: ride,
    titleRus: "Ездить",
    audio: rideAudio,
    id: Math.random().toString(),
  },
  {
    title: "Run",
    image: run,
    titleRus: "Бегать",
    audio: runAudio,
    id: Math.random().toString(),
  },
  {
    title: "Sing",
    image: sing,
    titleRus: "Петь",
    audio: singAudio,
    id: Math.random().toString(),
  },
  {
    title: "Skip",
    image: skip,
    titleRus: "Скакать",
    audio: skipAudio,
    id: Math.random().toString(),
  },
  {
    title: "Swim",
    image: swim,
    titleRus: "Плыть",
    audio: swimAudio,
    id: Math.random().toString(),
  },
  {
    title: "Tired",
    image: tired,
    titleRus: "Устать",
    audio: tiredAudio,
    id: Math.random().toString(),
  },
];

export default ActionsA;
