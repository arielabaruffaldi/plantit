import React, { useState } from "react";
import './ItemCount.scss'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const ItemCount = ({ initial = 0, min, max, onAdd }) => {
    const [count, setcount] = useState(initial);

    const restar = () => {
        if (count > min) { setcount(count - 1) }
    };

    const sumar = () => {
        if (count < max) { setcount(count + 1) }
    };

    return (
        <div className="itemCount">
            <div>
                <Button variant="outlined" color="primary" onClick={restar} disabled={count <= min}> <RemoveIcon gcolor="primary" /> </Button>
                <p> {count} </p>
                <Button variant="outlined" color="primary" onClick={sumar} disabled={count >= max}> <AddIcon color="primary"></AddIcon> </Button>
            </div>
            <Button variant="outlined" color="primary" onClick={onAdd} className='addToCart'> agregar al carrito </Button>
        </div>
    );
};

export default ItemCount;
