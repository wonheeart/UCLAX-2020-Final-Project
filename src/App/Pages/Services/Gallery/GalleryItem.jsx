import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from '../../../../common/Lightbox.jsx';

const GalleryItem = ({ item }) => {

    const [ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }
    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img 
                src={ item.image } 
                alt={ item.title } 
                onClick={ turnOn }
            />
            <div className="title">{ item.title }</div>
            <Lightbox show={ showLBox } hideAction={ turnOff }>
                <img src={ item.image } alt= { item.title } />
                <h3>{ item.title }</h3>
                <div className="description">
                    { item.description }
                </div>
            </Lightbox>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;

    border: solid 1px black;

    margin: 20px;
    img { 
        display: block; 
        // border: solid 10px purple;
        }

    .category {
        position: absolute;
        top: 0; right: 0; left: 0;
        background-color: rgba(0,0,0, .7);
        padding: 10px;
        font-size: 12px;
        color: white;

        text-align: right;
    }
    .title {
        position: absolute;
        bottom: 0; right: 0; left: 0;
        background-color: rgba(0,0,0, .8);
        padding: 10px;
        font-size: 12px;
        color: white;
    }

    .Lightbox {
        img {
            // border: solid 20px black; 
            max-width: 100%;
        }
        h3 {
            font-size: 12px;
            margin: 0px;
            color: white;
        }
        .description {
            color: #111111;
            background-color: gray;
            font-size: 14px;
        }
    }
`;