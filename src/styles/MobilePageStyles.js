import styled from "styled-components";
import { devices } from "../../breakpoints";

export const MobilePageStyles = styled.div`
  @media ${devices.smallMobiles} {
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
    margin-bottom: 20px;

    .order-progress-container {
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: center;
      text-transform: capitalize;

      .order-progress-text {
        font-size: 32px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
      }

      .order-progress-subtext {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #4d5254;
      }
    }
    .steps-container {
      display: flex;
      flex-direction: row;
      gap: 8px;
      justify-content: space-between;
      align-items: center;
      height: 37px;

      .step-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .step-image {
        height: 20px;
        width: 20px;
      }

      .step-text {
        font-size: 12px;
        font-weight: 400;
        line-height: 13px;
        color: #000000;
      }
    }
    .offer-product-container {
      display: flex;
      flex-direction: column;
      gap: 14px;

      .product-advantages {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .product-advantage-list {
          display: flex;
          flex-direction: row;
          gap: 6px;
        }

        .product-tick-image {
          height: 16px;
          width: 16px;
        }

        .product-advantage-text {
          font-size: 12px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #4d5254;
        }

        .product-advantage-plus {
          font-size: 12px;
          font-weight: 700;
          line-height: 19px;
          letter-spacing: 0em;
          text-align: left;
          color: #4d5254;
        }
      }

      .flex-justify {
        /* border: 1px solid red; */
        align-items: center;
        display: flex;
        height: 26px;
        text-align: center;
        justify-content: center;

        .product-text {
          font-size: 11.5px;
          font-weight: 400;
          line-height: 17px;
          color: #4d5254;
        }
      }

      .offer-text-note {
        font-size: 24px;
        font-weight: 400;
        line-height: 34px;
        text-align: center;
        color: #000000;
      }
      .offer-text-blue {
        font-size: 24px;
        font-weight: 600;
        line-height: 34px;
        text-align: center;
        color: #2c7ef8;
      }
      .product-specs {
        img {
          height: 328px;
          width: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }

      .product-detail-container {
        display: flex;
        flex-direction: row;
        height: 80px;
        align-items: center;
        padding: 2px;
        gap: 20px;
        /* justify-content: space-around; */

        .product-price-box {
          display: flex;
          flex-direction: row;
          gap: 6px;
          align-items: center;

          .corners {
            display: flex;
            flex-direction: row;
            gap: 10px;
            /* justify-content: space-between; */
          }
        }

        .product-image-details {
          border-radius: 10px;
          background-color: #2c7ef8;
          display: flex;
          align-items: center;

          .product-detail-image {
            height: 80px;
            border-radius: 10px;
            object-fit: fill;
            /* max-width: 600px; */
          }
        }
        .product-desc-details {
          display: flex;
          flex-direction: column;
          width: 220px;
          gap: 5px;

          .name-and-price {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .rows {
              display: flex;
              flex-direction: row;
              gap: 4px;
              align-items: center;

              .product-original-value {
                font-size: 10px;
                font-weight: 600;
                line-height: 14px;
                color: #969696;
                text-decoration: line-through;
                text-decoration-thickness: 0.3px;
              }
              .product-offer-value {
                font-size: 14px;
                font-weight: 600;
                line-height: 20px;
                color: #2c7ef8;
              }
            }
          }

          h2 {
            color: #000000;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }

          .product-star-iconbox {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;
            .product-star-icon {
              color: #ffc000;
              height: 9.4px;
              width: 9.4px;
            }
          }

          .product-stock-container {
            .row {
              display: flex;
              flex-direction: row;
              gap: 16px;
              align-items: center;

              .product-stock-iconbox {
                background-color: #e3eeff;
                height: 12px;
                width: 12px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                .product-stock-icon {
                  height: 6px;
                  width: 6px;
                  color: #2c7ef8;
                }
              }

              .row-stock {
                font-size: 12px;
                font-weight: 300;
                line-height: 16px;
                color: #37465a;
              }
            }
          }
        }
      }

      .product-discount-box {
        background-color: #edf3fd;
        padding: 12px 16px;
        height: 64px;
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
        border-radius: 10px;

        .product-discount-image {
          height: 24px;
          width: 24px;
        }

        .product-discount-text {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          color: #000000;
        }
      }

      .product-button-box {
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 134px;

        .product-btn {
          color: #59ae43;
          height: 51px;
          padding: 16px 60px;
          border-radius: 50px;
          background-color: #59ae43;
          color: white;
          text-transform: uppercase;
          border: none;
          offset: none;
          font-size: 13.8px;
          font-weight: 700;
          line-height: 19px;
        }
      }

      .product-shipping-box {
        height: 71px;
        padding: 8px 16px;
        border-radius: 4px;
        border: 0.5px solid #cfcfcf;
        gap: 12px;
        display: flex;
        flex-direction: column;

        .product-ship-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .linebreak {
            width: 14px;
            border: 0.5px solid #cfcfcf;
            rotate: -90deg;
          }
          span {
            color: #4d5254;
            font-size: 12px;
            font-weight: 400;
            line-height: 17px;
          }

          .product-secure-icon {
          }
        }

        .hr-line {
          width: 100%;
          border: 0.5px solid #cfcfcf;
        }

        .product-cards-box {
          display: flex;
          justify-content: center;
          flex-direction: row;
          gap: 3px;

          .product-card-image {
            width: 24px;
            height: 14px;
            object-fit: contain;
            border: 0.5px solid #cfcfcf;
            border-radius: 2px;
          }
        }
      }

      .product-reject-text {
        display: flex;
        justify-content: center;

        span {
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: #f82c2c;
          text-transform: uppercase;
          text-decoration: underline;
          text-underline-offset: 1.8px;
          /* text-underline-position: under; */
        }
      }

      .product-guarantee-box {
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        gap: 16px;

        .product-guarantee-image {
          width: 48px;
          height: 48px;
        }
        .product-guarantee-text {
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;

          color: #4d5254;
        }
        .product-guarantee-dark {
          font-size: 12px;
          font-weight: 700;
          line-height: 17px;
          color: #4d5254;
        }
      }
    }
  }

  @media ${devices.bigScreens} {
    display: none;
  }

  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }

  @media ${devices.smallScreens} {
    display: none;
  }

  @media ${devices.tabletsAndIpads} {
    display: none;
  }

  @media ${devices.tabletsAndMobiles} {
    display: none;
  }
`;
