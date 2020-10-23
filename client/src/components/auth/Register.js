import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import {Segment, } from 'semantic-ui-react';
import {Button, Header, Form, Input, Label, FormWrapper, } from '../../styles/SharedElements';

class Register extends React.Component {
  state = { firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    if (password === passwordConfirmation)
      handleRegister({ first_name: firstName, last_name: lastName, email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, firstName, lastName } = this.state;
    return (
      <FormWrapper>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Label>First Name</Label>
            <Input
                label="First Name"
                required
                autoFocus
                name='firstName'
                value={firstName}
                placeholder='First Name'
                onChange={this.handleChange}
              />
              <Label>Last Name</Label>
              <Input
                label="lastName"
                required
                autoFocus
                name='lastName'
                value={lastName}
                placeholder='Last Name'
                onChange={this.handleChange}
              />
              <Label>Email</Label>
              <Input
                label="Email"
                required
                autoFocus
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
              <Label>Password</Label>
              <Input
                Label="Password"
                required
                name='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
              <Label>Password Confirmation</Label>
              <Input
                label="Password Confirmation"
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={this.handleChange}
              />
            <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </FormWrapper>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}

