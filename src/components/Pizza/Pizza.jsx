import { useEffect, useState } from "react";
import { PIZZAS } from "../../data";
import { IconContext } from "react-icons";
import { TiArrowUpOutline } from "react-icons/ti";
import { TiArrowDownOutline } from "react-icons/ti";
import css from "./Pizza.module.css";

export default function Pizza({ setPrice }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((index) => {
      return index === PIZZAS.length - 1 ? 0 : index + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((index) => {
      return index === 0 ? PIZZAS.length - 1 : index - 1;
    });
  };

  useEffect(() => {
    setPrice(PIZZAS[currentIndex].price);
  }, [currentIndex, setPrice]);

  return (
    <>
      <div className={css.container}>
        <div className={css.pizza}>
          <div className={css.info}>
            <h1>- {PIZZAS[currentIndex].name} -</h1>
            <p>{PIZZAS[currentIndex].ingredients}</p>
          </div>
          <button onClick={handlePrev} className={css.prev} type="button">
            <IconContext.Provider value={{ size: 40, color: "white" }}>
              <TiArrowUpOutline />
            </IconContext.Provider>
          </button>
          <img
            className="css.image"
            src={PIZZAS[currentIndex].image}
            alt={PIZZAS[currentIndex].alt}
          />
          <button onClick={handleNext} className={css.next} type="button">
            <IconContext.Provider value={{ size: 40, color: "white" }}>
              <TiArrowDownOutline />
            </IconContext.Provider>
          </button>
        </div>
        <p className={css.price}>
          ~ Price is: <span>{PIZZAS[currentIndex].price}$</span>
        </p>
      </div>
    </>
  );
}
