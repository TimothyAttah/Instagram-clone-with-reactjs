import styled, { css } from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;

  ${(props) =>
    props.big &&
    css`
      width: 150px;
      height: 150px;
      font-size: 150px;
    `}

  ${(props) =>
    props.medium &&
    css`
      width: 80px;
      height: 80px;
      font-size: 80px;
    `}

    ${(props) =>
    props.small &&
    css`
      width: 40px;
      height: 40px;
      font-size: 40px;
    `}

    ${(props) =>
    props.smaller &&
    css`
      width: 30px;
      height: 30px;
      font-size: 30px;
    `}
`;
