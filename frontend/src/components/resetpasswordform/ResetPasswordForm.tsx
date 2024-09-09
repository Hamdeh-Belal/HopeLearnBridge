import { Input } from 'antd';
import {
  Label,
  ResetPasswordButton,
  ResetPasswordFormContainer,
  ResetPasswordStyledForm,
  ResetPasswordTitle,
} from './ResetPasswordForm.style';
import { FC } from 'react';
import { RESET_PASSWORD_FORM_TEST_ID, ResetPasswordFormProps } from './ResetPasswordForm.const';

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ className }) => {
  return (
      <ResetPasswordFormContainer
      className={className}
      data-testid={RESET_PASSWORD_FORM_TEST_ID}
    >
      <ResetPasswordTitle>Reset Password</ResetPasswordTitle>
      <ResetPasswordStyledForm layout="vertical">
        <Label name="email" label="Email">
          <Input placeholder="Email"/>
        </Label>
        <Label name="password" label="Password">
          <Input.Password placeholder="Password"/>
        </Label>

        <ResetPasswordButton htmlType="submit">Reset Password</ResetPasswordButton>
      </ResetPasswordStyledForm>
    </ResetPasswordFormContainer>
 );
};

export default ResetPasswordForm;