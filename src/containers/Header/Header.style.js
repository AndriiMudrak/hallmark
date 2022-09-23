import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: linear-gradient(0deg, #BA0020, #BA0020), linear-gradient(0deg, #144733, #144733), linear-gradient(0deg, #144733, #144733), #144733;
  color: ${({ theme }) => theme.colors.white};

  span:hover {
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;

    .logo {
      margin: 0 74px;
      cursor: pointer;
    }

    .main {
      span + span {
        margin-left: 46px;
      }
    }
  }
  
  .right {
    display: flex;
    align-items: center;
    margin-right: 60px;
  }
`;
