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
      color: ${({ theme }) => theme.lightDark};
    }
  }

  @media (max-width: 675px) {
    width: 100%;
    ul {
      /* box-shadow: 0 0 10px ${({ theme }) => theme.lightGray};
      z-index: 2;
      background: ${({ theme }) => theme.bgColor};
      border: 1px solid ${({ theme }) => theme.rgbColor};
      justify-content: space-between;
      padding: 3px 0; */

      justify-content: space-between;

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
