import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet ] = useState(false);

    const toggleMenu = () => {
        console.log('You clicked thehamburger', showMenu);
        showMenuSet(!showMenu);
    }

    // useEffect is for lifecycle events, like component mounted
    // When we pass empty [] it triggers component mounted
    useEffect(()=>{
        console.log('I have mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }

        // On Load / Component Mounts
        handleWindowSizeChange();

        // Every time Window is resized
        window.addEventListener('resize', handleWindowSizeChange);

        // Clean Up our Listeners on dismount
        return () => {
            window.addEventListener('resize', handleWindowSizeChange);
        }

    }, []); // straight braces

    return (
        <NavStyled>
            <div className="nested-wrapper">
                <div className="hamburger"
                    onClick={ toggleMenu }
                    >
                        <FontAwesomeIcon icon={ faBars } />
                    </div>
                    {
                        showMenu &&
                        <div className="Links">
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/Work">Work</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    }
                </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #212121;
    color: white;
    text-align: center;

    .hamburger {
        position: absolute;
        right: 10px;
        top: 7px;

        cursor: pointer;

        svg {
            color: black;
            width: 20px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }
    
    a {
        display: inline-block;

        text-align: center;
        font-size: 16px;
        background-color: #212121;
        color: darkgrey;

        text-decoration: none;

        margin-bottom: none;
        
        border-radius: 2px;

        width: 100%;
        line-height: 60px;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px; 
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 0px;
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #313131;
        }

        &.active {
            background-color: black;
        }
    }

`;