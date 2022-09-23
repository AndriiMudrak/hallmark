import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  min-width: 150px;
  height: 600px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.burgundy};
`;
