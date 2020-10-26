import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';

import './App.css';

import Login from './Login'
import App from './App'
import Home from './Home'

function AuthWrapper() {
    return (
        <BrowserRouter>
            <div style={{ padding: "1rem" }}>
                <Link style={{ padding: "1rem" }} to="/app">App</Link>
                <Link style={{ padding: "1rem" }} to="/home">Home</Link>
            </div>

            <Security
                issuer={'https://dev-8580715.okta.com/oauth2/default'}
                client_id={'0oaet93haDsYEzWIm5d5'}
                redirect_uri={'http://localhost:8080/implicit/callback'}
                scope={['openid', 'profile', 'email']} >
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/implicit/callback' component={LoginCallback} />

                    <Route path="/home" component={Home} />
                    <SecureRoute path="/app" component={App} />
                </Switch>
            </Security>
        </BrowserRouter>
    );
}

export default AuthWrapper;
