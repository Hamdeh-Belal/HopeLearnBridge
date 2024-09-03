import { ImgContainer, LeftColumn, RightColumn, SignUpContainer } from './SignUp.style';
import SignUpImg from '../../images/sign-up.svg?react';
import { SIGN_UP_TEST_ID, SignUpProps } from './SignUp.const';
import { FC } from 'react';
import SignUpForm from '../../components/signupform/SignUpForm';
const SignUp: FC<SignUpProps>= ({className})=> {
  return (
    <SignUpContainer className={className} data-testid={SIGN_UP_TEST_ID}>
      <LeftColumn span="12">
        <SignUpForm/>
      </LeftColumn>
      <RightColumn span="12">
        <ImgContainer>
          <SignUpImg />
        </ImgContainer>
      </RightColumn>
    </SignUpContainer>
  );
};

export default SignUp;