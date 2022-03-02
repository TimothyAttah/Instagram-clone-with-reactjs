import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import {
  StyledAppContainer,
  StyledAppWrapper,
  StyledMainContainer,
} from './styles/app';
import theme from './themes/theme';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StyledAppContainer>
          <input type='checkbox' id='theme' />
          <StyledAppWrapper className='App'>
            <Header />
            <StyledMainContainer>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </StyledMainContainer>
          </StyledAppWrapper>
        </StyledAppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
