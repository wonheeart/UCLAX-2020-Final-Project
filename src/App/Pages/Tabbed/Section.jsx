import React from 'react';
import styled from 'styled-components';

const Section = ({chosenTab}) => {

    // console.log('chosenTab', chosenTab);

    return (
        <SectionStyled className='Section'>
            <img src={ chosenTab.image } alt={ chosenTab.title }/>
            <h3>{ chosenTab.title }</h3>
            <div dangerouslySetInnerHTML={ {__html: chosenTab.text } } />
        </SectionStyled>
    );
}

export default Section;

const SectionStyled = styled.div`
    background-color: #313131;
    color: grey;
    padding: 10px;
    font-size: 14px;
`;