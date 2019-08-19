import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';

import {withFirebase} from './firebase';

const SignOutButton = withRouter(({firebase, history, removeUser}) => {
    const onSignOut = () => {
        localStorage.removeItem('uid');
        firebase.doSignOut();
        removeUser();
        history.push('/');
    }

    return (
        <div>
            <Header as='h1'>Sign Out</Header>
            <Button onClick={onSignOut}>Sign Out</Button>
        </div>
    );
})

export default withFirebase(SignOutButton);