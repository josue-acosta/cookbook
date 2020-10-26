import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Protected from './Protected';

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path='/protected' component={Protected} />
        </BrowserRouter>
    );
}

export default App;
