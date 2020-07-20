import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAnchor,
} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <HeaderStyled>
            <div className="nested-wrapper">
                <div className="row-container">
                    <div className="logo"><FontAwesomeIcon icon={ faAnchor } /></div>
                    <div className="text">
                        <h2>My Final Site</h2>
                        <h3>An Awesome Portfolio</h3>
                    </div>
                </div>
            </div> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #6246ea;

    @media ${mq.tablet} {
        background-color: orange;
    }
    @media ${mq.desktop} {
        background-color: purple;
    }

    font-size: 30px;

.row-container {
    display: flex;
    justify-content: center;
    }
    .logo {
        color: #e45858;
        margin-right: 10px;

        svg {
            width: 100px;
            height: auto;
        }
    }
    .text {
        h2 {
            font-size: 40px;
            margin: 0px;
            color: whitesmoke;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
            color: whitesmoke;
        }
    }
    
`;