import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import { withOktaAuth } from '@okta/okta-react';


class Login extends Component {
    state = {
        authenticated: null
    }

    checkAuthentication = async () => {
        const authenticated = await this.props.authState.isAuthenticated;

        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidMount = async () => {
        this.checkAuthentication()
    }

    login = async () => {
        this.props.authService.login('/home');
    }

    render() {
        if (this.state.authenticated) {
            return <Redirect to='/home' />
        } else {
            return (
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={this.login}>Login with Okta</Button>
                </div>
            )
        }
    }
}

export default withOktaAuth(Login);