import bicycle from "./img/bicycle.jpg";
import bike from "./img/bike.jpg";
import bus from "./img/bus.jpg";
import car from "./img/car.jpg";
import helicopter from "./img/helicopter.jpg";
import plane from "./img/plane.jpg";
import train from "./img/train.jpg";
import truck from "./img/truck.jpg";

import bicycleAudio from "./audio/bicycle.mp3";
import bikeAudio from "./audio/bike.mp3";
import busAudio from "./audio/bus.mp3";
import carAudio from "./audio/car.mp3";
import helicopterAudio from "./audio/helicopter.mp3";
import planeAudio from "./audio/plane.mp3";
import trainAudio from "./audio/train.mp3";
import truckAudio from "./audio/truck.mp3";

const transport = [
  {
    title: "Bicycle",
    image: bicycle,
    titleRus: "Велосипед",
    audio: bicycleAudio,
    id: Math.random().toString(),
  },
  {
    title: "Bike",
    image: bike,
    titleRus: "Мотоцикл",
    audio: bikeAudio,
    id: Math.random().toString(),
  },
  {
    title: "Bus",
    image: bus,
    titleRus: "Автобус",
    audio: busAudio,
    id: Math.random().toString(),
  },
  {
    title: "Car",
    image: car,
    titleRus: "Машина",
    audio: carAudio,
    id: Math.random().toString(),
  },
  {
    title: "Helicopter",
    image: helicopter,
    titleRus: "Вертолет",
    audio: helicopterAudio,
    id: Math.random().toString(),
  },
  {
    title: "Plane",
    image: plane,
    titleRus: "Самолет",
    audio: planeAudio,
    id: Math.random().toString(),
  },
  {
    title: "Train",
    image: train,
    titleRus: "Поезд",
    audio: trainAudio,
    id: Math.random().toString(),
  },
  {
    title: "Truck",
    image: truck,
    titleRus: "Грузовик",
    audio: truckAudio,
    id: Math.random().toString(),
  },
];

export default transport;
