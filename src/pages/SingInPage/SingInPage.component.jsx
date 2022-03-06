import React, { useState } from 'react';
import Button from '../../components/Button/Button.styles';
import FormInput from '../../components/formComponents/FormInput/FormInput.component';
import { FormFooter, FormWrap, SingInPageWrap } from './SignInPage.styles';

function SingInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <SingInPageWrap>
      <h2>I already have an account</h2>
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
          <Button type="submit">SIGN IN WITH GOOGLE</Button>
        </FormFooter>
      </FormWrap>
    </SingInPageWrap>
  );
}

export default SingInPage;
