import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  min-width: 150px;

  margin: 40px;

  div {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.burgundy};
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    margin: 0;

    div {
      width: 300px;
      height: 250px;
    }
}
`;
