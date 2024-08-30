import { useState } from "react";
import Header from "./components/Header/Header";
import Pizza from "./components/Pizza/Pizza";
import MyModal from "./components/MyModal/MyModal";
import css from "./App.module.css";

export default function App() {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [pizzasArr, setPizzasArr] = useState([]);

  const [sending, setSending] = useState(false);
  const [buying, setBuying] = useState(false);

  const totalPrice = (price1 + price2).toFixed(2);

  const handleBuying = () => {
    setBuying(true);
    setTimeout(() => {
      setBuying(false);
    }, 2000);
  };

  const handleClick = () => {
    setSending(true);
    setPizzasArr((prev) => {
      return [...prev, totalPrice];
    });
    setTimeout(() => {
      setSending(false);
    }, 1000);
  };
  const handleClean = () => {
    setPizzasArr([]);
  };

  return (
    <>
      <Header
        buying={buying}
        handleBuying={handleBuying}
        pizzas={pizzasArr}
        handleClean={handleClean}
      />
      <div className={css.container}>
        <div className={css.box}>
          <div className={css.pizza1}>
            <Pizza setPrice={setPrice1} />
          </div>
          <div className={css.pizza2}>
            <Pizza setPrice={setPrice2} />
          </div>
        </div>
        <div className={css.total}>
          <p>
            ~ Total price is: <span>{totalPrice}$ ~</span>
          </p>

          <button
            className={sending ? css.send : ""}
            onClick={handleClick}
            type="submit"
          >
            Send to catr
          </button>
        </div>
        <MyModal pizzas={pizzasArr} handleClean={handleClean} />
      </div>
    </>
  );
}
