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
                        <h2>Wonhee Lee</h2>
                        <h3>Product Designer</h3>
                    </div>
                </div>
            </div> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #9696b7;

    @media ${mq.tablet} {
        background-color: #9696b7;
    }
    @media ${mq.desktop} {
        background-color: #9696b7;
    }

    font-size: 30px;

.row-container {
    display: flex;
    justify-content: center;
    }
    .logo {
        color: #3d2e88;
        margin-right: 10px;
        margin-top: 5px;

        svg {
            width: 40px;
            height: auto;
        }
    }
    .text {
        h2 {
            font-size: 40px;
            margin: 0px;
            color: #3d2e88;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
            margin-left: -20px;
            color: whitesmoke;
        }
    }
    
`;