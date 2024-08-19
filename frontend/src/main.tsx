import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Teacher from './pages/teacher';
import CreateCourse from './components/createcourse/CreateCourse';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />}>
            <Route path="create-course" element={<CreateCourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);