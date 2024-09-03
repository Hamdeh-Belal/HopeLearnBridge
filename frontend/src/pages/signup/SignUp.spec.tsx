import { render} from '../../utilities/test-utilities';
import SignUp from './SignUp';
import { SIGN_UP_TEST_ID } from './SignUp.const';

describe('SignUp page', () => {
  test('Should render sign up page', async () => {
    const{getByTestId}=render(<SignUp/>);
      expect(getByTestId(SIGN_UP_TEST_ID)).toBeInTheDocument();
  });
});