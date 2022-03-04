import styled from 'styled-components';

export const StyledSearchContainer = styled.form`
  position: relative;
  input {
    background-color: ${({ theme }) => theme.lightPrimary};
    border: 1px solid ${({ theme }) => theme.lightGray};
    min-width: 250px;
    text-indent: 0.3125rem;
    border-radius: 3px;
    padding: 10px 0;
  }

  button {
    display: none;
  }

  @media (max-width: 900px) {
    /* margin-right: 20px; */
  }

  @media (max-width: 675px) {
    margin-top: 20px;
  }
`;

export const StyledSearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  pointer-events: none;
  color: ${({ theme }) => theme.textDark};
  display: flex;
  align-items: center;

  span:first-child {
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-right: 3px;
  }
`;

export const StyledCloseSearch = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
  font-weight: 900;
  color: crimson;
`;

export const StyledSearchUser = styled.div`
  border-left: 1px solid wheat;
  border-right: 1px solid wheat;
`;
