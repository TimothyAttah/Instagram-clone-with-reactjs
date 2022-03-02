import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/Header';
import {
  StyledAppContainer,
  StyledAppWrapper,
  StyledMainContainer,
} from './styles/app';
import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <input type='checkbox' id='theme' />
        <StyledAppWrapper className='App'>
          <Header />
          <StyledMainContainer>
            <h1>Hello world</h1>
          </StyledMainContainer>
        </StyledAppWrapper>
      </StyledAppContainer>
    </ThemeProvider>
  );
};

export default App;
