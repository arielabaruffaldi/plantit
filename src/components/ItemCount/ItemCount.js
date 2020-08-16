import React, { useState } from "react";
import './ItemCount.scss'
import Button from '@material-ui/core/Button';



const ItemCount = ({ initial = 0, min, max, onAdd }) => {
    const [count, setcount] = useState(initial);

    const restar = () => {
        return count > min ? setcount(count - 1) : null;
    };

    const sumar = () => {
        return count < max ? setcount(count + 1) : null;
    };

    return (
        <div className="itemCount">
            <div>
                <Button variant="outlined" color="primary" onClick={restar} disabled={count <= min}> - </Button>
                <p> {count} </p>
                <Button variant="outlined" color="primary" onClick={sumar} disabled={count >= max}> + </Button>
            </div>
            <Button variant="outlined" color="primary" onClick={onAdd}> agregar al carrito </Button>
        </div>
    );
};

export default ItemCount;
