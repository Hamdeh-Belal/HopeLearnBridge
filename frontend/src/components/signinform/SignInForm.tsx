import { Input } from 'antd';
import {
  Label,
  SignInButton,
  SignInFormContainer,
  SignInStyledForm,
  SignInTitle,
} from './SignInForm.style';
import { FC } from 'react';
import { SIGN_IN_FORM_TEST_ID, SignInFormProps } from './SignInForm.const';

const SignInForm: FC<SignInFormProps> = ({ className }) => {
  return (
    <SignInFormContainer
      className={className}
      data-testid={SIGN_IN_FORM_TEST_ID}
    >
      <SignInTitle>Sign In</SignInTitle>
      <SignInStyledForm layout="vertical">
        <Label name="email" label="Email">
          <Input placeholder="Email" />
        </Label>
        <Label name="password" label="Password">
          <Input placeholder="Password" />
        </Label>

        <SignInButton>Sign In</SignInButton>
      </SignInStyledForm>
    </SignInFormContainer>
  );
};

export default SignInForm;