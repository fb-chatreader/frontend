import React, { Component } from 'react';
import { withFirebase } from './firebase';

import { Form, Button, Header, Segment, Input } from 'semantic-ui-react';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  successMessage: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = ev => {
    ev.preventDefault();
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({
          ...INITIAL_STATE,
          successMessage: 'Password reset email was sent'
        });
      })
      .catch(err => {
        this.setState({ ...INITIAL_STATE, err });
      });
  };

  onChange = ev => {
    ev.preventDefault();
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    const { email, err } = this.state;
    const isValid = email === '';
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          name='email'
          value={this.onChange}
          onChange={this.onChange}
          text='text'
          placeholder='Email Address'
        />
        <Button disabled={isValid} type='submit'>
          Reset My Password
          {this.state.successMessage}
          {err && <p> {err.message}</p>}
        </Button>
      </Form>
    );
  }
}

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetForm);

export { PasswordForgetForm };
