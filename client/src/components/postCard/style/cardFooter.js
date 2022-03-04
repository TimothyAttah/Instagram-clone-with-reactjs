import styled from 'styled-components';

export const StyledCardIconMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  a {
    color: ${({ theme }) => theme.textDark};
  }

  svg {
    margin: 10px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    padding: 0 30px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
  }
`;
