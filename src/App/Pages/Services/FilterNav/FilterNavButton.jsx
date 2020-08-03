import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name, currCategory, currCategorySet}) => {

    console.log('FilterNavButton currCategory', currCategory);

    const changeCategory = () => {
        currCategorySet(name);
    }

    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';

    return (
        <FilterNavButtonStyled 
            className={ theClassName }
            onClick={ changeCategory }
        >
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: #9696b7;
    color: white;
    margin: 10px;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
        background-color: #271c5d;
    }

    &.active {
        background-color: #3d2e88;
    }
`;