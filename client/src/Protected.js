import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Protected() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(data => {
                setCurrentTime(data.time);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <strong>PROTECTED</strong>
                <img src={logo} className="App-logo" alt="logo" />
                <p>It's' {currentTime}.</p>
            </header>
        </div>
    );
}

export default Protected;
