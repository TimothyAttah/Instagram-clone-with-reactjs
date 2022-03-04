import styled from 'styled-components';

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* cursor: pointer; */
  padding: 15px 25px;
`;

export const StyledCardHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCardName = styled.div`
  /* transform: translateY(3px); */
  margin-left: 5px;

  h6 {
    margin-bottom: 2px;

    a {
      color: ${({ theme }) => theme.textDark};
    }
  }

  small {
    color: ${({ theme }) => theme.lightGreen};
  }
`;

export const StyledNavItem = styled.div`
  position: relative;
  span {
    cursor: pointer;
  }
`;

export const StyledDropDownMenu = styled.div`
  border: 1px solid ${({ theme }) => theme.gray};
  padding: 10px;
  margin-bottom: 10px;
  position: absolute;
  left: inherit !important;
  right: 0;
  background: ${({ theme }) => theme.bgLight};
  width: 160px;
  z-index: 5;
`;

export const StyledDropDownItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;

  span {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;
