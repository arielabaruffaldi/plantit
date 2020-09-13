import React from "react";
import styles from "./ButtonGreen.module.scss"

const ButtonGreen = ({ children, secondaryBtn, onClickHandler, borderNone }) => {
  return <div className={`${styles.ButtonGreen} ${secondaryBtn ? styles.secondaryBtn : ""} ${borderNone ? styles.borderNone : ""}`} onClick={onClickHandler}>{children}</div>;
};

export default ButtonGreen;
