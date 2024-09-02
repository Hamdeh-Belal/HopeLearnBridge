import { render} from '../../utilities/test-utilities';
import SignIn from './SignIn';
import { SIGN_IN_TEST_ID } from './SignIn.const';

describe('SignIn page', () => {
  test('Should render sign in page', async () => {
    const{getByTestId}=render(<SignIn/>);
      expect(getByTestId(SIGN_IN_TEST_ID)).toBeInTheDocument();
  });
});