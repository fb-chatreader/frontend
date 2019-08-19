import React, {Component} from 'react';
import {Form, Button, Header, Segment, Input} from 'semantic-ui-react';

import {withFirebase} from '../firebase';

// setting the state as empty, might need to refactor this into another state file
const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null, 
    successMessage: null,
};

// look into refactoring this code into React Hooks
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = ev => {
        const {passwordOne} = this.state;
        
    }
}