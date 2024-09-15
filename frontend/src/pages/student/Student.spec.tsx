import { render} from '../../utilities/test-utilities';
import Student from './Student';
import { STUDENT_PAGE_TEST_ID } from './Student.const';

describe('student page', () => {
  test('Should render student in page', async () => {
    const{getByTestId}=render(<Student/>);
      expect(getByTestId(STUDENT_PAGE_TEST_ID)).toBeInTheDocument();
  });
});