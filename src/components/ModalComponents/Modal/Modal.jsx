import React from "react";
import styles from "./Modal.module.scss";
import closeImg from "../../../img/closeImg.png";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = ({ header, dataForModalCard, closeButton, actions, onClick }) => {
  let styleColor = "";
  if (dataForModalCard.color === "Red") {
    styleColor = styles.Red;
  } else if (dataForModalCard.color === "Blue") {
    styleColor = styles.Blue;
  } else {
    styleColor = styles.Black;
  }
  return (
    <>
      <div className={styles.Modal}>
        <div className={styles.ModalBody}>
          <div className={styles.ModalTop}>
            <h1 className={styles.Title}>{header}</h1>
            {Object.keys(dataForModalCard).length !== 0 &&
              <button className={styles.Close} onClick={closeButton}>
                <img src={closeImg} alt={"closeImg"} />
              </button>
            }
          </div>
          <div className={styles.ModalMain}>
            {Object.keys(dataForModalCard).length !== 0 &&
              <>
                 <img src={"db/" + dataForModalCard.img} alt="" />
                 <div className={styles.ModalMainContent}>
                   <p className={styles.ModalMainText}>{dataForModalCard.name}</p>
                   <ul className={styles.ModalCardData}>
                     <li>
                       <span>Color:</span>
                       <span className={styleColor}>{dataForModalCard.color}</span>
                     </li>
                     <li>
                       <span>Code:</span>
                       {dataForModalCard.code}
                     </li>
                     <li>
                       <span>Price:</span>
                       {dataForModalCard.price}$
                     </li>
                   </ul>
                 </div>
                 </>
            }
          </div>
          <div className={styles.Button}>{actions}</div>
        </div>
      </div>
      <Backdrop onClick={onClick} />
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  dataForModalCard: PropTypes.object,
  closeButton: PropTypes.func,
  actions: PropTypes.object,
  onClick: PropTypes.func,
};

export default Modal;
