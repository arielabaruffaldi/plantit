import React, { useState } from "react";
import styled from "styled-components";
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="outlined" color="primary" onClick={restar}> - </Button>
            <P> {count} </P>
            <Button variant="outlined" color="primary" onClick={sumar}> + </Button>
        </div>
    );
};

export default ItemCount;

const P = styled.p`
    padding: 0 2em
`