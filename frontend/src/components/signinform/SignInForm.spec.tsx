import { render} from '../../utilities/test-utilities';
import { SIGN_IN_FORM_TEST_ID } from './SignInForm.const';
import SignInForm from './SignInForm';

describe('SignIForm Component', () => {
  test('Should render sign in form component', () => {
    const{getByTestId}=render(<SignInForm/>);
      expect(getByTestId(SIGN_IN_FORM_TEST_ID)).toBeInTheDocument();
  });
});