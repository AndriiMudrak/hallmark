import styled from 'styled-components';

export const Wrapper = styled.footer`
  max-width: 1024px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.5px;
  margin: 64px 400px 40px 0;

  span {
    font-weight: 600;
  }

  .link {
    cursor: pointer;
    text-decoration: underline;
  }
`;
