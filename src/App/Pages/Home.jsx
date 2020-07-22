import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Componets ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <tittle>Welcome :: WL Final Project</tittle>
            </Helmet>
            <div className="nested-wrapper">
                <Tabbed />
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;