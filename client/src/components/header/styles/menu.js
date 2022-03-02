import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    li {
      align-items: center;
    }
  }

  a {
    margin: 0 10px;
    color: ${({ theme }) => theme.gray};

    :hover {
      color: ${({ theme }) => theme.textDark};
    }
  }

  .active {
    a {
      color: #121212;
    }
  }
`;

export const activeLink = {
  color: `${({ theme }) => theme.textDark}`,
};
