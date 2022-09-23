import styled from 'styled-components';
import DogRose from '../../public/DogRose.png';
import Baubel2 from '../../public/Baubel2.png';
import Letter from '../../public/Letter.png';



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  background-color: hsl(0, 0%, 90%);

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${DogRose}), url(${Baubel2}), url(${Letter});
    background-size: 18%, 10%, 10%;
    background-position: 0% 0%, 100% 60%, -5% 100%;
    background-repeat: no-repeat, no-repeat, no-repeat;
  }
`;
