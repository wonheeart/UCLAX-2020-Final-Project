import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
            className='Button'
            type={ type }
        >
            { children } 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: #414141;
    color: white;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 2px;
    font-size: 14px;

    &:hover {
        background-color: #212121;
    }
    &:active {
        background-color: black;
    }
`;