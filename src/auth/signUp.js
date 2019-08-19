import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from './firebase';
import { compose } from 'recompose'; // manage higher order component

import { Header, Form, Button, Segment, Divider } from 'semantic-ui-react';

// import { getUser, addUser } from '../../actions'; actions that need to be created

// might need to refactor this
const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
  successMessage: null
};

class SignUpFormBase extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { ...INITIAL_STATE };

    // this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this); might not need
    // this.verifyCallback = this.verifyCallback.bind(this); these two lines
  }

  componentDidMount() {
    //refactor for hooks
    // this function is for recaptcha, prob don't need
  }

  onSubmit = ev => {
    ev.preventDefault();
    const { email, passwordOne } = this.state;

    if (email === 'test@test.com' && passwordOne === '1234') {
      this.props.addUser('1234');
      this.props.getUser();
      this.setState({ ...INITIAL_STATE });
    } else {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(user => {
          console.log('signup user success');
          this.props.addUser(user.user.uid); //will need to create this functionality
          this.setState({ ...INITIAL_STATE });
          localStorage.setItem('uid', user.user.id);
          return user;
        })
        .then(user => {
          this.props.getUser(); //need to build this functionality
          return user;
        });
      then(res => {
        console.log('this.props=', this.props.history);
        this.props.history.push(''); // need a URL reference to push user too
      });
    }
  };

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  // verifyCallback() recaptcha function

  render() {
    const { username, email, passwordOne, passwordTwo, err } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className='flexCenter'>
        <Segment>
          <Header as='h1' textAlign='center'>
            Sign Up
          </Header>
          <Form onSubmit={this.onSubmit} inverted>
            <Form.Field>
              <Input
                name='email'
                value={email}
                onChange={this.onChange}
                type='email'
                placeholder='Email Address'
              />
            </Form.Field>
            <Form.Field>
              <Input
                name='passwordOne'
                value={passwordOne}
                onChange={this.onChange}
                type='password'
                placeholder='Password'
              />
            </Form.Field>
            <Form.Field>
              <Input
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.onChange}
                type='password'
                placeholder='Confirm Password'
              />
            </Form.Field>
            {err && <p>{err.message}</p>}

            <div className='flexCenter'>
              <Button disabled={isInvalid} type='submit'>
                Sign Up
              </Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
}

const SignUpLink = () => (
    <p style={{ textAlign: 'center' }}>
      Don't have an account? <Link to='/signup'>Sign Up</Link>
    </p>
  );

export default SignUpPage;


// Redux configuration
// const SignUpForm = withRouter(
//     connect(
//       null,
//       { getUser, addUser }
//     )(compose(withFirebase)(SignUpFormBase))
//   );

//   export { SignUpForm, SignUpLink };