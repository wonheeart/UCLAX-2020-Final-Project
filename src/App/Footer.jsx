import React from 'react';
import styled from 'styled-components';
import { mq } from '../common/mediaQueries.js';

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
    background-color: #9696b7;
    padding: 20px;
    color: whitesmoke;
    text-align: center;

    @media ${mq.tablet} {
        background-color: #9696b7;
    }
    @media ${mq.desktop} {
        background-color: #9696b7;
    }

`;