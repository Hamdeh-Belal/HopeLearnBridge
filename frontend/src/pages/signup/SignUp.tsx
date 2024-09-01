import { Col } from 'antd';
import { ImgContainer, RightColumn, SignUpContainer } from './SignUp.style';
import SignUpImg from '../../images/sign-up.svg?react';
import { SIGN_UP_TEST_ID, SignUpProps } from './SignUp.const';
import { FC } from 'react';
const SignUp: FC<SignUpProps>= ({className})=> {
  return (
    <SignUpContainer className={className} data-testid={SIGN_UP_TEST_ID}>
      <Col span="12" className="left-column"></Col>
      <RightColumn span="12">
        <ImgContainer>
          <SignUpImg />
        </ImgContainer>
      </RightColumn>
    </SignUpContainer>
  );
};

export default SignUp;