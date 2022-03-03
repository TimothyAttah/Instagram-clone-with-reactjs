import styled from 'styled-components';

export const StyledHeader = styled.nav`
  max-width: 1000px;
  width: 100%;
  min-height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 0 10px ${({ theme }) => theme.lightGray};
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.rgbColor};
  display: flex;
  align-items: center;

  a {
    flex: 1;
    color: ${({ theme }) => theme.textDark};
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
