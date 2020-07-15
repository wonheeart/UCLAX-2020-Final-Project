import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mq } from '../common/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
                <NavLink to="/" exact>Welcome</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>

            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #d1d1e9;
    color: white;

    text-align: center;

    a {
        display: inline-block;

        text-align: center;
        font-size: 14px;
        background-color: #6246ea;
        color: white;

        text-decoration: none;

        margin-bottom: 10px;
        
        border-radius: 5px;

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
            background-color: #3d2e88;
        }

        &.active {
            background-color: blueviolet;
        }
    }

`;