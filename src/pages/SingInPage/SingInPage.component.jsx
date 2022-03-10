import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import Button from '../../components/Button/Button.styles';
import FormInput from '../../components/formComponents/FormInput/FormInput.component';

import {
  FormFooter,
  FormWrap,
  SingInPageWrap,
  Text,
  StyledLink,
} from './SignInPage.styles';

function SingInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('error', error.message);
    }
  };

  return (
    <SingInPageWrap>
      <h3>I already have an account</h3>
      <p>Sign in with email and password</p>
      <FormWrap onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormFooter>
          <Button type="submit">SIGN IN</Button>
          <Button google onClick={signInWithGoogle} type="button">
            SIGN IN WITH GOOGLE
          </Button>
        </FormFooter>
      </FormWrap>
      <Text>
        ...or <StyledLink to="/react-todo/sign-up">Sign Up</StyledLink> if you
        do not have an account
      </Text>
    </SingInPageWrap>
  );
}

export default SingInPage;
