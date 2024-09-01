import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Teacher from './pages/teacher';
import ViewCourses from './pages/viewcourses';
import CreateCourse from './components/createcourse';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
import SignUp from './pages/signup';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<Teacher />}>
              <Route index element={<ViewCourses />} />
              <Route path="create-course" element={<CreateCourse />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);