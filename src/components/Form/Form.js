import React, { useState } from 'react';
import { useCartContext } from "./../../context/CartContext";
import Input from "./../Input/Input";
import styles from "./Form.module.scss"

const Form = () => {
    const { buyer, setBuyer } = useCartContext();
    /* const [datos, setDatos] = useState({}) */

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }
/*     function handleClick() {
        setBuyer(datos)
    } */

    return (
        <section className={styles.FormWrapper}><h2>Datos para la compra</h2>
            <form className={styles.Form}>
                <Input inputValue="Nombre" inputType="text" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Apellido" inputType="text" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Email" inputType="email" onChangeHandler={handleInputChange}></Input>
                <Input inputValue="Teléfono" inputType="phone" onChangeHandler={handleInputChange}></Input>
            </form>
        </section>
    )
}

export default Form;