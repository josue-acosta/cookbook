import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home'

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(data => {
                setCurrentTime(data.time);
            });
    }, []);

    return (
        <BrowserRouter>
            <div style={{ padding: "1rem" }}>
                <Link style={{ padding: "1rem" }} to="/">App</Link>
                <Link style={{ padding: "1rem" }} to="/home">Home</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <header className="App-header">
                            <strong>APP</strong>
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>It's' {currentTime}.</p>
                        </header>
                    </div>
                </Route>
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
