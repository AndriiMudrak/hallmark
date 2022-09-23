import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .date {
    color: ${({ theme }) => theme.colors.burgundy};
    font-size: 30px;
    font-weight: 500;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 6px 6px 16px 6px;
    border-radius: 8px;
    
    .sponsor-logo {
      color: ${({ theme }) => theme.colors.violet};
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      width: 160px; 
      margin-bottom: 8px;
    }
  }
`;
