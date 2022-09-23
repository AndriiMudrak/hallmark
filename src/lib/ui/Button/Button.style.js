import styled from 'styled-components';

export const Wrapper = styled.button`
  min-height: 30px;
  min-width: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.darkBlue};
  background-color: ${({ theme, primary }) => primary ?  theme.colors.darkBlue : 'transparent'};
  border: ${({ theme }) => `1px solid ${theme.colors.darkBlue}`};
  border-radius: 36px;
  font-size: 21px;
  font-weight: 800;
  padding: 0 12px;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 6px;
    path {
      stroke: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.darkBlue};
    }
  }
`;
