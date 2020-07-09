import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nested-wrapper">
            </div> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    padding: 20px;
`