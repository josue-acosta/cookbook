import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState(0);
    const { authService } = useOktaAuth();

    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(data => {
                setCurrentTime(data.time);
            });
    }, []);

    const logout = async () => { authService.logout('/'); };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={logout}>Logout</button>
                <strong>APP</strong>
                <img src={logo} className="App-logo" alt="logo" />
                <p>It's' {currentTime}.</p>
            </header>
        </div>
    );
}

export default App;
