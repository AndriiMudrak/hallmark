import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: none;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    display: flex;
    justify-content: center;
    padding: 24px 0;
    width: 100%;
    background-color:  ${({ theme }) => theme.colors.black};
  }
`;
