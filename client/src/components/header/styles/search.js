import styled from 'styled-components';

export const StyledSearchContainer = styled.form`
  position: relative;
  margin-top: 20px;

  input {
    background-color: #fafafa;
    border: 1px solid #ddd;
    min-width: 250px;
    text-indent: 0.3125rem;
    border-radius: 3px;
    padding: 10px 0;
  }

  button {
    display: none;
  }
`;

export const StyledSearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  pointer-events: none;
  color: #000;
  display: flex;
  align-items: center;

  span:first-child {
    font-size: 14px;
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
