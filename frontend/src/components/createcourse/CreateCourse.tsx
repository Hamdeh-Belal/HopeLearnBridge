import { Input } from 'antd';
import {
  ButtonContainer,
  CreateCourseContainer,
  CreateCourseHeader,
  Label,
  StyledButton,
  StyledForm,
} from './CreateCourse.style';

function CreateCourse() {
  return (
    <CreateCourseContainer data-testid="create">
      <CreateCourseHeader>Create a New Course!</CreateCourseHeader>
      <StyledForm layout="vertical" variant="outlined">
        <Label name="title" label="Title:">
          <Input placeholder="Title" />
        </Label>
        <Label name="description" label="Description:">
          <Input.TextArea rows={8} placeholder="Description" />
        </Label>
        <ButtonContainer>
          <StyledButton htmlType="submit">Create!</StyledButton>
        </ButtonContainer>
      </StyledForm>
    </CreateCourseContainer>
  );
}

export default CreateCourse;