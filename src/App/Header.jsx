import React from 'react';
import styled from 'styled-components';

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
                        <h3>A really Awesome Portfolio</h3>
                    </div>
                </div>
            </div> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #fffffe;
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
            color: #2b2c34;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
            color: #2b2c34;
        }
    }
`;