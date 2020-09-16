import React, { useState } from 'react';
import styles from "./Input.module.scss";

const Input = ({ inputValue, inputType, onChangeHandler, referenceForm }) => {

    return (
        <div className={styles.InputContainer}>
            <label className={styles.Label} for={inputValue}>{inputValue}</label>
            <input className={styles.Input} type={inputType} name={inputValue} onChange={onChangeHandler} ref={referenceForm}></input>
        </div>)
}

export default Input;