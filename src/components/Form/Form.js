import React, { useState } from 'react';
import { useCartContext } from "./../../context/CartContext";
import Input from "./../Input/Input";
import ButtonGreen from "./../ButtonGreen/ButtonGreen";
import styles from "./Form.module.scss"

const Form = () => {
    const { setBuyer } = useCartContext();
    const [datos, setDatos] = useState({})

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    function handleClick() {
        setBuyer(datos)
    }

    return (
        <section className={styles.FormWrapper}><h2>Datos para la compra</h2>
            <form className={styles.Form}>
                <Input inputValue="Nombre" inputType="text" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Apellido" inputType="text" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Email" inputType="email" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Teléfono" inputType="phone" onChangeHandler={handleInputChange}></Input>
                <ButtonGreen secondaryBtn = {true} onClickHandler={handleClick}><button>Finalizar compra</button></ButtonGreen>
            </form>
        </section>
    )
}

export default Form;