import Modal from "react-modal";
import { useState } from "react";
import OverLay from "../OverLay/OverLay";
import Loader from "../Loader/Loader";
import { FaRegWindowClose } from "react-icons/fa";
import css from "./MyModal.module.css";
import { IconContext } from "react-icons";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function MyModal({
  modalIsOpen,
  closeModal,
  pizzas = [],
  handleClean,
  handleBuying,
}) {
  const [loader, setLoader] = useState(false);

  const handleBuy = () => {
    if (pizzas.length === 0) return;
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      closeModal();
      handleClean();
      handleBuying();
    }, 4000);
  };

  return (
    <>
      {loader && <OverLay />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={css.container}>
          <h2 className={css.title}>Your orders:</h2>
          <div className={css.orderList}>
            {pizzas.length > 0 ? (
              pizzas.map((pizza, index) => (
                <p className={css.item} key={index}>
                  Pizza {index + 1} price: <span>{pizza}$</span>
                </p>
              ))
            ) : (
              <p>No pizzas...</p>
            )}
          </div>
          <div className={css.btns}>
            {loader && <Loader />}
            <button onClick={handleClean} className={css.clear}>
              Clear All
            </button>
            <button className={css.close} onClick={closeModal}>
              <IconContext.Provider value={{ size: 30 }}>
                <FaRegWindowClose />
              </IconContext.Provider>
            </button>
            <button onClick={handleBuy} className={css.buy} type="submit">
              Buy
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
