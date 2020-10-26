import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <strong>PUBLIC</strong>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to the Home page</p>
                <Link style={{ color: 'white' }} to="/home">Home Page</Link>
                <Link style={{ color: 'white' }} to="/protected">Protected Page</Link>
            </header>
        </div>
    );
}

export default App;
