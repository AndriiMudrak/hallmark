import styled from 'styled-components';
import HorizontalDelimiter from '../../public/HorizontalDelimiter.png';
import VerticalDelimiter from '../../public/VerticalDelimiter.png';

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
      
      .delimiter {
        background-image: url(${HorizontalDelimiter});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0% 50%;
        width: 100%;
        height: 16px;
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

  .chance-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;

    .courtesy-of-container {
      margin-top: 12px;
    }

    .hot {
      color: ${({ theme }) => theme.colors.red};
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
      
      .sponsor-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

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

  .rule-description {
    color: ${({ theme }) => theme.colors.black};
    font-size: 11px;
    text-align: center;
    letter-spacing: 0.5px;
    margin: 64px 0 40px 0;

    span {
      font-weight: 600;
    }

    .link {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: 365px;
    margin: 0 5px;
    margin-top: 0%;
  
    .title {
      flex-direction: column;

      .left-title{
        flex-flow: row-reverse;
        align-items: flex-start;
        justify-content: space-between;

        .very-marry-logo {
          padding-top: 20px;
          flex-grow: 2;
          text-align: center;

          img {
            width: 105px;
            height: 105px;
          }
        }

        .empty {
          flex-grow: 9;
        }
      }

      .presented-by-logos {
        flex-direction: row;
        justify-content: space-around;
        margin-top: 16px;

        .delimiter {
          background-image: url(${VerticalDelimiter});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50% 0;
          width: 26px;
          height: 86px;
        }
      }
    }

    .chance-description {
      margin: 16px 48px;
      text-align: center;

      .courtesy-of-container {
        width: 200px;

        img {
          width: 100%;
        }
      }
    }

    .prizes {
      flex-direction: column;
      flex-flow: column-reverse;
      justify-content: space-around;

      .prizes-img {
        width: 100%;

        img {
          width: inherit;
        }
      }

      .today-prize {
        .sponsor-logo {
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          span {
            margin: 0 6px 0 0;
          }
          img {
            width: 45%;
          }
        }

        img:first-child {
          width: 80%;
          height: 80%;
          margin: 20px;
        }

        button {
          width: 326px;
          height: 54px;
          font-size: 24px;
          margin: 20px 0;
          order: 1
        }
      }
    }

    .daily-prizes {
      .prizes-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 52px;
        font-size: 18px;
        font-weight: 600;
        
        .link {
          color: ${({ theme }) => theme.colors.darkBlue};
          font-size: 18px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .prizes-cards {
        flex-wrap: nowrap;
        overflow-x: scroll;
      }
    }

    .rule-description {
      margin: 18px 0 6px 0;
    }
  }
`;
