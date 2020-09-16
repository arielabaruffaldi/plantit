import React from "react";
import styles from "./ButtonGreen.module.scss"

const ButtonGreen = ({ children, secondaryBtn, onClickHandler, borderNone, classes }) => {
  return <div className={`${styles.ButtonGreen} ${classes} ${secondaryBtn ? styles.secondaryBtn : ""} ${borderNone ? styles.borderNone : ""}`} onClick={onClickHandler}>{children}</div>;
};

export default ButtonGreen;
