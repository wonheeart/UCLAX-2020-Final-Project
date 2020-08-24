import React from 'react';
import styled from 'styled-components';

const Deets = () => {

    return (
        <DeetsStyled className='Deets'>
            Drop me a line!!!
        </DeetsStyled>
    );
}

export default Deets;

const DeetsStyled = styled.div`
color: lightgrey;
font-size: 14px;
`;