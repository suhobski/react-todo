import React, { useState } from 'react';

import Button from '../../components/Button/Button.styles';
import FormInput from '../../components/formComponents/FormInput/FormInput.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import {
  FormFooter,
  FormWrap,
  SingInPageWrap,
} from '../SingInPage/SignInPage.styles';

function SignUpPage() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log('error', error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <SingInPageWrap>
      <h3>I do not have an account</h3>
      <p>Sign up with email and password</p>
      <FormWrap onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <FormFooter>
          <Button type="submit">SIGN UP</Button>
        </FormFooter>
      </FormWrap>
    </SingInPageWrap>
  );
}

export default SignUpPage;
