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

  .menu {
    display: none;
  }

  .left {
    display: flex;
    align-items: center;

    .logo {
      margin: 0 74px;
      cursor: pointer;
      text-align: center;
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

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    .menu {
      display: block;
      margin: 0 6px;
    }

    .left {
      width: 100%;

      .logo {
        width: 100%;
        padding-right: 10px;
      }

      .main {
        display: none;
      }
    }

    .right {
      display: none;
    }
  }
`;
