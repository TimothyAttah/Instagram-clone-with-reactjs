import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  text-transform: capitalize;
  font-size: 20px;

  @media (max-width: 414px) {
    font-size: 12px;
    font-weight: bolder;
  }
`;
