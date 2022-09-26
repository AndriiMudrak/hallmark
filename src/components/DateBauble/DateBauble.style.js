import styled from 'styled-components';
import Baubel from '../../public/Baubel.png'

export const Wrapper = styled.div`
  width: 198px;
  height: 222px;
  color: ${({ theme }) => theme.colors.white};
  background-image: url(${Baubel});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  line-height: 28px;
  .month {
    font-size: 28px;
    font-weight: 500;
  }

  .day {
    font-size:36px;
    font-weight: 800;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: 82px;
    height: 92px;
    line-height: 15px;
    padding-left: 8px;
    
    .month {
      font-size: 14px;
    }

    .day {
      font-size: 20px;
    }
  }
`;
