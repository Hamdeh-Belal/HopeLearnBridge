import  {ReactNode ,ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';

 // eslint-disable-next-line react-refresh/only-export-components
 const TestUtilsProviders = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> =>
    render(ui, { wrapper: TestUtilsProviders, ...options });

export {customRender as render};