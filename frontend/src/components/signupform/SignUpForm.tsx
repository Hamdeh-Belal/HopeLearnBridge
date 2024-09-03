import { FC } from 'react';
import { SIGN_UP_FORM_TEST_ID, SignUpFormProps } from './SignUp.const';
import {
  Label,
  SignUpButton,
  SignUpFormContainer,
  SignUpTitle,
} from './SignUpForm.style';
import { Col, Form, Input, Row, Select } from 'antd';

const SignUpForm: FC<SignUpFormProps> = ({ className }) => {
  return (
    <SignUpFormContainer
      className={className}
      data-testid={SIGN_UP_FORM_TEST_ID}
    >
      <SignUpTitle>Sign Up </SignUpTitle>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Label name="first_name" label="First name">
              <Input placeholder="First Name" />
            </Label>
          </Col>
          <Col span={12}>
            <Label name="last_name" label="Last name">
              <Input placeholder="Last Name" />
            </Label>
          </Col>
        </Row>
        <Label name="email" label="Email">
          <Input placeholder="Email" />
        </Label>
        <Label name="password" label="Password">
          <Input placeholder="Password" />
        </Label>
        <Label name="confirm_password" label="Confirm password">
          <Input placeholder="Confirm Password" />
        </Label>
        <Label name="role" label="Role">
          <Select
            placeholder="Select your role"
            options={[
              { value: 'teacher', label: 'Teacher' },
              { value: 'student', label: 'Student' },
            ]}
          />
        </Label>
        <SignUpButton>Sign Up</SignUpButton>
      </Form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;