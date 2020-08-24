import React from 'react';
import styled from 'styled-components';

import ReactPlayer from "react-player";

const YoutubePackage = () => {

    return (
        <YoutubePackageStyled className='YoutubePackage'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=prQTMgOsMPg"
            />
        </YoutubePackageStyled>
    );
}

export default YoutubePackage;

const YoutubePackageStyled = styled.div`
    
`;