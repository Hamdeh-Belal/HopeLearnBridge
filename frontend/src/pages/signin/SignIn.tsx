import SignInImg from '../../images/sign-in.svg?react';
import { FC } from 'react';
import { SIGN_IN_TEST_ID, SignInProps } from './SignIn.const';
import {
  ImgContainer,
  LeftColumn,
  RightColumn,
  SignInContainer,
} from './SignIn.style';
const SignIn: FC<SignInProps> = ({ className }) => {
  return (
    <SignInContainer className={className} data-testid={SIGN_IN_TEST_ID}>
      <LeftColumn span="12"></LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <SignInImg />
        </ImgContainer>
      </RightColumn>
    </SignInContainer>
  );
};

export default SignIn;
