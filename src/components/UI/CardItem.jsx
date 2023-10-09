/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import useSound from "use-sound";
import { motion } from 'framer-motion';
import rotate from "./icons/rotate-btn.png";

function CardItem(props) {
  const {title, titleRus, image, audio} = props
  const [playAudio] = useSound(audio);

  const clickHandler = () => {
    const frontSide = document.querySelector('.card-container:hover .card-side-front')
    const backSide = document.querySelector('.card-container:hover .card-side-back')
    frontSide.style.cssText = 'transform: rotateY(180deg)'
    backSide.style.cssText = 'transform: rotateY(0deg)'
  }

  const rotateHandler = () => {
    const frontSide = document.querySelector('.card-container:hover .card-side-front')
    const backSide = document.querySelector('.card-container:hover .card-side-back')
    frontSide.style.cssText = 'transform: rotateY(0deg)'
    backSide.style.cssText = 'transform: rotateY(180deg)'
  }

    return (
    <div className="card-container">
      <div className="card-side card-side-front">
        <img src={image} alt="" className="card-container__img" onClick={playAudio} />
        <h3 className="card-container__title" onClick={playAudio}>{title}</h3>
        <button type="button" className="card-container__btn" onClick={clickHandler}>
          <img src={rotate} alt="rotate" />
        </button>
      </div>
      <motion.div className="card-side card-side-back" whileHover={rotateHandler}>
        <img src={image} alt="" className="card-container__img" />
        <h3 className="card-container__title">{titleRus}</h3>
      </motion.div>
    </div>
  );
}

export default CardItem