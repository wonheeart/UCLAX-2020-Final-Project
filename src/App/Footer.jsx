import React from 'react';
import styled from 'styled-components';
import { mq } from '../common/mediaQueries.js';

const Footer = () => {
    return (
        <FooterStyled>
            <div className="nested-wrapper">
                ® Wonhee Lee, 2020
            </div>
            </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #313131;
    padding: 20px;
    color: black;
    // text-align: center;

    @media ${mq.tablet} {
        background-color: #313131;
    }
    @media ${mq.desktop} {
        background-color: #313131;
    }

`;