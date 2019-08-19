import React, { Component } from 'react';
import { Form, Button, Header, Segment, Input } from 'semantic-ui-react';

import { withFirebase } from '../firebase';

// setting the state as empty, might need to refactor this into another state file
const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  successMessage: null
};

// look into refactoring this code into React Hooks
class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = ev => {
    ev.preventDefault();
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({
          ...INITIAL_STATE,
          successMessage: 'Password reset success!'
        });
      })
      .catch(err => {
        this.setState({ ...INITIAL_STATE, err });
      });
  };

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, err } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || (passwordOne === '' && passwordTwo === '');

    return (
      <Segment>
        <Form>
          <Header as='h3'>Password Reset</Header>
          <Form.Field>
            <Input
              focus
              color='black'
              name='passwordOne'
              value={passwordOne}
              onChange={this.onChange}
              type='password'
              placeholder='New Password'
            />
          </Form.Field>
          <Button
            style={
              isInvalid
                ? { background: ourColors.inactiveButtonColor, color: 'white' }
                : { background: ourColors.buttonColor, color: 'white' }
            }
            disabled={isInvalid}
            type='submit'
          >
            Reset My Password
          </Button>
          {this.state.successMessage}
          {err && <p>{err.message}</p>}
        </Form>
      </Segment>
    );
  }
}

export default withFirebase(PasswordChangeForm);