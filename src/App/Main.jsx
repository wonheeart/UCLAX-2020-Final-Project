import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx';
import Work from './Pages/Work.jsx';
import Contact from './Pages/Contact.jsx';

const Main = () => {
    return (
        <Mainstyled>
            <Switch>
                <Route path='/Contact' component={ Contact } />
                <Route path='/Work' component={ Work } />
                <Route path='/' component={ Home } />
            </Switch>
        </Mainstyled>
    );
}

export default Main;

const Mainstyled = styled.main`
    background-color: black;
    padding: 50px;
    
    h1 { 
        font-size: 75px;
    }
`;