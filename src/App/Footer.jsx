import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            <div className="nested-wrapper">
                Footer
            </div>
            </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: black;
    padding: 20px;
    color: gray;
`;