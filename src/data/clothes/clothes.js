import blouse from "./img/blouse.jpg";
import boot from "./img/boot.jpg";
import coat from "./img/coat.jpg";
import dress from "./img/dress.jpg";
import pants from "./img/pants.jpg";
import shirt from "./img/shirt.jpg";
import shoe from "./img/shoe.jpg";
import skirt from "./img/skirt.jpg";

import blouseAudio from "./audio/blouse.mp3";
import bootAudio from "./audio/boot.mp3";
import coatAudio from "./audio/coat.mp3";
import dressAudio from "./audio/dress.mp3";
import pantsAudio from "./audio/pants.mp3";
import shirtAudio from "./audio/shirt.mp3";
import shoeAudio from "./audio/shoe.mp3";
import skirtAudio from "./audio/skirt.mp3";

const clothes = [
  {
    title: "Blouse",
    image: blouse,
    titleRus: "Блузка",
    audio: blouseAudio,
    id: Math.random().toString(),
  },
  {
    title: "Boot",
    image: boot,
    titleRus: "Ботинки",
    audio: bootAudio,
    id: Math.random().toString(),
  },
  {
    title: "Coat",
    image: coat,
    titleRus: "Пальто",
    audio: coatAudio,
    id: Math.random().toString(),
  },
  {
    title: "Dress",
    image: dress,
    titleRus: "Платье",
    audio: dressAudio,
    id: Math.random().toString(),
  },
  {
    title: "Pants",
    image: pants,
    titleRus: "Брюки",
    audio: pantsAudio,
    id: Math.random().toString(),
  },
  {
    title: "Shirt",
    image: shirt,
    titleRus: "Рубашка",
    audio: shirtAudio,
    id: Math.random().toString(),
  },
  {
    title: "Shoe",
    image: shoe,
    titleRus: "Туфли",
    audio: shoeAudio,
    id: Math.random().toString(),
  },
  {
    title: "Skirt",
    image: skirt,
    titleRus: "Юбка",
    audio: skirtAudio,
    id: Math.random().toString(),
  },
];

export default clothes;
