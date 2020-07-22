import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabSet}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    return (
        <TabStyled 
        className='Tab'
            onClick={ handleClick }
        >
            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    display: inline-block;

    background-color: #6246ea;
    width: 100px;
    line-height: 50px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;

    margin-right: 10px;
`;