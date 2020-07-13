import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <div className="nested-wrapper">
                <a href="/">Welcome</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
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
        line-height: 60px;
        font-size: 14px;
        background-color: #6246ea;
        color: white;

        text-decoration: none;

        width: 160px;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;

        &:hover {
            background-color: #3d2e88;
        }
    }
`;