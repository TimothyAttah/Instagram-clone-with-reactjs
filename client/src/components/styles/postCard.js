import styled from 'styled-components';

export const StyledPostsCard = styled.div`
  border: 2px solid ${({ theme }) => theme.darkGray};
  padding: 10px;
  border-radius: 5px;
  margin: 15px 0;
  box-shadow: 0 0 4px ${({ theme }) => theme.lightGray};
`;
