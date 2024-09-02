import { render} from '../../utilities/test-utilities';
import { SIGN_UP_FORM_TEST_ID } from './SignUp.const';
import SignUpForm from './SignUpForm';

describe('SignUp form Component', () => {
  test('Should render sign up form component', async () => {
    const{getByTestId}=render(<SignUpForm/>);
      expect(getByTestId(SIGN_UP_FORM_TEST_ID)).toBeInTheDocument();
  });
});