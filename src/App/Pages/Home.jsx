import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Componets ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
// import Staff from './Staff/Staff.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Wonhee Lee // Home</title>
            </Helmet>

            <Slideshow />
            
            <div className="nested-wrapper">
                <Tabbed />
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;