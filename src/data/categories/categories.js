import category1 from "./img/actions-1.jpg";
import category2 from "./img/actions-2.jpg";
import category3 from "./img/animals-1.jpeg";
import category4 from "./img/animals-2.jpg";
import category5 from "./img/clothes.jpg";
import category6 from "./img/emotions.jpeg";
import category7 from "./img/transport.jpg";
import category8 from "./img/food.jpg";

const categories = [
  { title: "Action (set A)", image: category1, id: Math.random().toString() },
  { title: "Action (set B)", image: category2, id: Math.random().toString() },
  { title: "Animals (set A)", image: category3, id: Math.random().toString() },
  { title: "Animals (set B)", image: category4, id: Math.random().toString() },
  { title: "Clothes", image: category5, id: Math.random().toString() },
  { title: "Emotions", image: category6, id: Math.random().toString() },
  { title: "Transport", image: category7, id: Math.random().toString() },
  { title: "Food", image: category8, id: Math.random().toString() },
];

export default categories;
