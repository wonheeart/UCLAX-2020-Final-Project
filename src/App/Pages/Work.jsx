import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import ServicesContainer from './Services/ServicesContainer.jsx';

const Work = () => {

    return (
        <WorkStyled className='Work'>
            <Helmet>
                <title>Wonhee // Work</title>
            </Helmet>
            <div className="nest-wrapper">
                <ServicesContainer />
            </div>
        </WorkStyled>
    );
}

export default Work;

const WorkStyled = styled.div`
    
`;