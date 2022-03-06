import styled from 'styled-components';

export const StyledHeader = styled.nav`
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
  justify-content: space-between;
  padding: 0 10px;

  a {
    /* flex-grow: 1; */
    color: ${({ theme }) => theme.textDark};
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  /* box-shadow: 0 0 10px ${({ theme }) => theme.lightGray};
  z-index: 2;
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.rgbColor}; */
  justify-content: space-between;
  padding: 3px 5px;

  @media (max-width: 675px) {
    width: 100%;
    margin: 20px 0;
    box-shadow: 0 0 10px ${({ theme }) => theme.lightGray};
    z-index: 2;
    background: ${({ theme }) => theme.bgColor};
    border: 1px solid ${({ theme }) => theme.rgbColor};
  }
`;
