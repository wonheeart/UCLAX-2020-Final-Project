import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="nested-wrapper">
                <div className="row-container">
                    <div className="text">
                        <h3>Wonhee Lee</h3>
                    </div>
                </div>
            </div> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #313131;

    @media ${mq.tablet} {
        background-color: #313131;
    }
    @media ${mq.desktop} {
        background-color: #313131;
    }

    font-size: 30px;

.row-container {
    display: flex;
    justify-content: center;
    }

    }
    .text {
        h3 {
            font-size: 18px;
            margin: 0px;
            margin-left: 0px;
            color: #9f7242;
        }
    }
    
`;