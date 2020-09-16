import React, { useState } from "react";
import { useCartContext } from "./../../context/CartContext";
import Input from "./../Input/Input";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import ButtonGreen from "./../ButtonGreen/ButtonGreen";

const Form = ({createOrder}) => {
  const { buyer, setBuyer } = useCartContext();

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };
  /*     function handleClick() {
        setBuyer(datos)
    } */

  return (
    <section className={styles.FormWrapper}>
      <h2>Datos para la compra</h2>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputValue="Nombre"
          inputType="text"
          onChangeHandler={handleInputChange}
        ></Input>
        <Input
          inputValue="Apellido"
          inputType="text"
          onChangeHandler={handleInputChange}
        ></Input>
        <Input
          inputValue="Email"
          inputType="email"
          onChangeHandler={handleInputChange}
        ></Input>
        <Input
          inputValue="Teléfono"
          inputType="phone"
          onChangeHandler={handleInputChange}
        ></Input>
        <ButtonGreen
          classes={styles.btnSubmit}
          secondaryBtn={true}
          onClickHandler={createOrder}
        >
          <button>Finalizar compra</button>
        </ButtonGreen>
      </form>
    </section>
  );
};

export default Form;
