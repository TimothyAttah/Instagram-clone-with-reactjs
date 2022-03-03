import styled from 'styled-components';

export const StyledProfileContainer = styled.div`
  position: relative;
`;

export const StyledProfileMenuHandle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  position: relative;
  cursor: pointer;
`;

export const StyledProfileMenu = styled.ul`
  border: 1px solid red;
  width: 150px;
  position: absolute;
  right: 0;
  box-shadow: 0 0 10px ${({ theme }) => theme.lightGray};
  background: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.rgbColor};
  border-radius: 5px;

  li {
    margin: 10px 0;
    padding: 5px 10px;
    border-bottom: 1px solid wheat;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    z-index: 999;
  }

  li:last-child {
    border-bottom: none;
  }
`;
