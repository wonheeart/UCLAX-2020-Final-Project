import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabSet, chosenTab}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';


    return (
        <TabStyled 
            className={ theClassName }
            onClick={ handleClick }
        >
            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    display: inline-block;

    width: 100px;
    line-height: 50px;
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    color: white;

    margin-right: 10px;

    background-color: #BDBDD7;
    &.active {
        background-color: #d1d1e9;
    }

`;