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
    background-color: #6246ea;
    padding: 20px;
    color: whitesmoke;

    @media ${mq.tablet} {
        background-color: orange;
    }
    @media ${mq.desktop} {
        background-color: purple;
    }

`;