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
    border-radius: 2px 2px 0px 0px;
    text-align: center;
    color: grey;
    cursor: pointer;

    margin-right: 10px;

    background-color: #212121;
    &.active {
        background-color: #313131;
    }

`;