import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  border: 2px dashed red;
  /* input {
    :checked ~ div {
      filter: invert(1);
    }
  } */

  #theme {
    display: none;
  }

  #theme:checked ~ div {
    filter: invert(1);
  }
`;

export const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.bgLight};
`;

export const StyledMainContainer = styled.div`
  border: 2px dashed red;
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;
