import React from 'react';
import styled from 'styled-components';

// fawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

const Lightbox = ({hideAction, show=false, children, width=600}) => {

    const handleHide = () => {
        hideAction();
    }

    const stopBubbleUp = (event) => {
        event.stopPropagation();
    }

    return (
        show &&
        <LightboxStyled 
            className='Lightbox'
            onClick={ handleHide }
            lightWidth={ width }
        >
            <div className="light" onClick={ stopBubbleUp }>
                <FontAwesomeIcon 
                    classname='close'
                    icon={ faWindowClose }
                    onClick={ handleHide }
                />
                {children} 
            </div>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(0,0,0, .8);
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    z-index: 1000;

    .light {
        width: ${ ({lightWidth}) => lightWidth + 40 }px;
        padding: 20px;
        background-color: #313131;
        color: grey;

        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        .close {
            position: absolute;
            right: 2px;
            top: 2px;

            cursor: pointer;
        }
    }
`;