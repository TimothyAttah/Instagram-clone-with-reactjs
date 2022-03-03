import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  text-transform: capitalize;
  font-size: 20px;

  /* min-height: calc(100vh - 70px);
  position: relative;
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
  } */

  @media (max-width: 414px) {
    h1 {
      font-size: 24px;
    }
  }
`;
