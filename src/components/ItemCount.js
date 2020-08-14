import React, { useState } from "react";

const ItemCount = ({min, max, onAdd}) => {
    const [count, setcount] = useState(0);

    const restar = () => {
        setcount(count - 1)
    };

    const sumar = () => {
        setcount(count + 1);
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={restar}> - </button>
            <p> {count} </p>
            <button onClick={sumar}> + </button>
        </div>
    );
};

export default ItemCount;