import React, { Component } from 'react';

// import {compose} from 'recompose' need to look into this
import { withRouter } from 'react-router-dom';
import { Form, Button, Header, Icon, Segment } from 'semantic-ui-react';

import { SignUpLink } from './signUp.js';
import PasswordForgetPage from './passwordForgot';

import { withFirebase } from './firebase/index';
// import {getUser, addUser} from need this functionality

const SignInPage = () => (
  <div className='flexCenter'>
    <Segment>
      <Header as='h1' textAlign='center'>
        Login
      </Header>

      {/* <SignInForm /> */}
      <SignInFacebook />
      <br />
      <SignUpLink />
    </Segment>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  resetPassword: false
};

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }

  onSubmit = ev => {
    ev.preventDefault();
    this.props.withFirebase
      .doSignInWithFacebook()
      .then(user => {
        this.setState({ ...INITIAL_STATE });
        localStorage.setItem('uid', user.user.uid);
        this.props.addUser(user.user.id);
        return user;
      })
      .then(res => {
        this.props.getUser();
        // this.props.history.push('/') figure out which url to push
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  render() {
    const { err } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <div className='flexCenter'>
          <Button type='submit'>
            <Icon name='facebook' />
            Sign In with Facebook
          </Button>
        </div>
        {err && <p>{err.message}</p>}
      </Form>
    );
  }
}

export default SignInPage;

export { SignInFacebook };

// email sign in class
// class SignInFormBase extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = async ev => {
//     ev.preventDefault();
//     const { email, password } = this.state;

//     if (email === 'test@test.com' && password === '1234') {
//       this.setState({ ...INITIAL_STATE });
//       localStorage.setItem('uid', '1234');
//     //   await this.props.getUser(); need to build this function
//       // should change below code so it would wait until getUser is completed...
//     //   this.props.history.push('/recipes'); URL needs to be determined for user
//     }else{
//         console.log('Inside SignIn else statement');
//         this.props.firebase
//             .doSignInWithEmail
//     }
//   };
// }
