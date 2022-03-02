import styled from 'styled-components';

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    li {
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      padding: 0 10px;
      a {
        color: ${({ theme }) => theme.gray};
        :hover {
          color: ${({ theme }) => theme.textDark};
        }
      }
    }
  }

  .active {
    a {
      color: #121212;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0;
    ul {
      box-shadow: 0 0 10px #ddd;
      z-index: 2;
      background: #f8f9fa;
      border: 1px solid rgb(0, 0, 0, 0.125);
      justify-content: space-between;
      padding: 3px 0;

      li a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const activeLink = {
  color: `${({ theme }) => theme.textDark}`,
};
