import { Input } from 'antd';
import { useForm } from 'react-hook-form';
import {
  ButtonContainer,
  CreateCourseContainer,
  CreateCourseHeader,
  Label,
  StyledButton,
  StyledForm,
} from './CreateCourse.style';
import {CREATE_COURSE_ID } from './CreateCourse.const';

const CreateCourse = () => {
  const { register} = useForm();

  return (
    <CreateCourseContainer data-testid={CREATE_COURSE_ID}>
      <CreateCourseHeader>Create a New Course!</CreateCourseHeader>
      <StyledForm layout="vertical">
        <Label name="title" label="Title:">
          <Input placeholder="Title" {...register('title')} />
        </Label>
        <Label name="description" label="Description:">
          <Input.TextArea
            rows={8}
            placeholder="Description"
            {...register('description')}
          />
        </Label>
        <ButtonContainer>
          <StyledButton type="primary" htmlType="submit">
            Create!
          </StyledButton>
        </ButtonContainer>
      </StyledForm>
    </CreateCourseContainer>
  );
};

export default CreateCourse;