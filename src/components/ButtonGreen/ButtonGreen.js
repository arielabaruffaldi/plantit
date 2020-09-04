import React from "react";
import styled from "styled-components";

const ButtonGreen = ({ children, classes }) => {
  return <DivStyled className={classes}>{children}</DivStyled>;
};

export default ButtonGreen;

const DivStyled = styled.div`
  padding: 1em 1.5em;
  color: #22ac2b;
  border: 1px solid #149c1e;
  width: fit-content;   
  a{
    color: #22ac2b;
  }
  &:hover{
      background: #149c1e;
      transition: 300ms all;
      a{
        color: white
      }
  }
`;
