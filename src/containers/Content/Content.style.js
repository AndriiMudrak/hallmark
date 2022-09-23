import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 220px);
  width: 1024px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.black};

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left-title {
      display: flex;
      justify-content: space-between;

      flex-grow: 2;
    }

    .presented-by-logos {
      display: flex;
      flex-grow: 1;

      flex-direction: column;
      
      .horizontal-delimiter {
        margin: 16px 0; 
      }

      .presented-by-container{

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 124px;
          height: 68px;
        }

        span {
          color: ${({ theme }) => theme.colors.gray};
          font-size: 12px;
          margin-bottom: 6px;
        }
      }
    }
  }

  .chance-description{
    display: flex;
    flex-direction: column;
    align-items: center;

    .courtesy-of-container {
      margin-top: 12px;
    }
  }

  .prizes {
    display: flex;
    margin-top: 30px;
    width: 100%;

    .today-prize {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 2;
      background-color: ${({ theme }) => theme.colors.white};

      span {
        color: ${({ theme }) => theme.colors.gray};
        margin-bottom: 6px;
      }

      button {
        width: 448px;
        height: 64px;
        font-size: 32px;
        margin: 40px 0;
      }

      img {
        object-fit: contain;
      }
    }
  }

  .daily-prizes {
    width: 100%;
    display: flex;
    flex-direction: column;

    .prizes-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 52px;
      font-size: 32px;
      font-weight: 600;
      
      .link {
        color: ${({ theme }) => theme.colors.darkBlue};
        font-size: 24px;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .prizes-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 24px;
      }
  }

  .how-works-btn {
    margin-top: 45px;

    button {
      width: 276px;
      height: 45px;
      padding: 8px
    }
  }
`;
