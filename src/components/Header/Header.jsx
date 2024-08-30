import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import { useState } from "react";
import MyModal from "../MyModal/MyModal";
import css from "./Header.module.css";

export default function Header({ pizzas, handleClean }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Make you pizza</h1>
      <button onClick={openModal} className={css.btn} type="button">
        <IconContext.Provider value={{ size: 40, color: "white" }}>
          <IoCartOutline />
        </IconContext.Provider>
      </button>
      <MyModal
        handleClean={handleClean}
        pizzas={pizzas}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
