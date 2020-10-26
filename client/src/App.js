import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';

// Components
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

// Styles
import './App.css';

function App() {
    return (
        <BrowserRouter>

            <Security
                issuer={'https://dev-8580715.okta.com/oauth2/default'}
                client_id={'0oaet93haDsYEzWIm5d5'}
                redirect_uri={'https://react-flask-001.herokuapp.com/implicit/callback'}
                scope={['openid', 'profile', 'email']}
            >
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/implicit/callback' component={LoginCallback} />
                    <Route path='/home' component={Home} />
                    <SecureRoute path='/protected' component={Protected} />
                </Switch>
            </Security>
        </BrowserRouter>
    );
}

export default App;
