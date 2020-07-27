import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Componets ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <tittle>Welcome :: WL Final Project</tittle>
            </Helmet>
            <div className="nested-wrapper">
                <Tabbed />
            </div>
            <div className="nested-wrapper">
                <Staff />
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;