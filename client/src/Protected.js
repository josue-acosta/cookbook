import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));


function Protected() {
    const classes = useStyles();

    const [currentTime, setCurrentTime] = useState(0);
    const { authService, authState } = useOktaAuth();

    const logout = async () => {
        authService.logout('/');
    };

    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(data => {
                setCurrentTime(data.time);
            });
    }, []);

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            News
                </Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="App">
                <header className="App-header">
                    <strong>PROTECTED</strong>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>It's' {currentTime}.</p>
                </header>
            </div>
        </>
    );
}

export default Protected;
