import styled from "styled-components";
import { devices } from "../../breakpoints";

export const DesktopPageStyles = styled.div`
  @media ${devices.bigScreens} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0px 140px;
    margin-top: 40px;
    margin-bottom: 40px;

    .order-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 14px;
      align-items: center;
      text-transform: capitalize;

      .order-title {
        font-size: 48px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        color: #000000;
      }

      .order-subtitle {
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-transform: capitalize;
        color: #4d5254;
      }
    }

    .steps-container {
      display: flex;
      flex-direction: row;
      gap: 50px;
      align-items: center;
      justify-content: space-between;

      .steps-box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
      }
      .step-image-box {
        width: 40px;
        height: 40px;
      }

      .step-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 22px;
        text-transform: capitalize;
        color: #000000;
      }
    }

    .product-container {
      display: flex;
      flex-direction: row;
      gap: 40px;
      background-color: #fafafa;
      border-radius: 10px;
      padding-top: 40px;
      padding-bottom: 40px;
      padding-right: 40px;
      padding-left: 40px;
      gap: 40px;
      align-items: center;

      /* @media ${devices.smallMobiles} {
        display: block;
      } */

      .product-review-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .product-image {
        width: 575px;
        height: 591px;
        object-fit: cover;
      }

      .product-review-box {
        width: 575px;
        height: 186px;
        padding: 24px;
        border-radius: 10px;
        gap: 18px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
      }

      .product-review-user {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 13px;
      }

      .product-user-image {
        width: 48px;
        height: 48px;
        border-radius: 100px;
      }
      .product-user-details {
        display: flex;
        flex-direction: column;
        gap: 0.3px;
      }

      .star-icon {
        width: 14.89px;
        height: 14.22px;
        color: #ffc000;
      }

      .product-user-verify {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .product-user-name {
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        color: #333333;
      }

      .product-verify-icon {
        color: #5bb59a;
        height: 16px;
        width: 16px;
      }

      .product-user-vertify-text {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #5bb59a;
      }

      .product-review-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #4d5254;
      }
    }

    .product-detail-container {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .product-detail-special {
        font-size: 32px;
        font-weight: 400;
        line-height: 44.8px;
        text-align: left;
        color: #000000;
        text-transform: capitalize;
      }
      .product-special {
        color: #2c7ef8;
        text-transform: uppercase;
        font-size: 32px;
        font-weight: 400;
        line-height: 45px;
      }

      .mobile-image {
        display: none;
      }

      .product-title-price-box {
        display: grid;
        grid-template-columns: 134px 392px;
        gap: 24px;
        /* justify-content: space-between; */
      }

      .product-image-smallbox {
        background-color: #2c7ef8;
        padding: 2px 2px;
        border-radius: 10px;
      }
      .product-image-small {
        width: 134px;
        height: 134px;
      }

      .product-title-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .product-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        color: #000000;
      }

      .product-prices {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .product-original-price {
        position: relative;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #969696;
        text-decoration: line-through;
      }

      .product-special-price {
        font-size: 22px;
        font-weight: 600;
        line-height: 31px;
        color: #2c7ef8;
      }
      .space-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .product-star-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 18px;
        height: 18px;
        border-radius: 16px;
      }

      .product-stock-box {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
      }

      .product-circle-box {
        width: 16px;
        height: 16px;
        background-color: #d4f1f4;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
      }

      .product-circle-icon {
        color: #2c7ef8;
        width: 8.53px;
        height: 8.53px;
      }

      .product-stock-text {
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        color: #37465a;
        width: 104px;
        height: 22px;
      }

      .product-description-box {
        height: 34px;
      }

      .product-description-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #4d5254;
      }

      .product-positive-points {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
      }

      .product-positive-icon {
        width: 22px;
        height: 22px;
        color: #2c7ef8;
      }

      .product-subtext {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
      }

      .product-maintext {
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
      }

      .product-savings-container {
        background-color: #edf3fd;
        padding: 12px 16px;
        height: 56px;
        border-radius: 10px;
        width: 550px;
      }

      .savings-box {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
      }

      .savings-icon-box {
        background-color: #2c7ef8;
        border-radius: 20px;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .savings-icon {
        width: 17px;
        height: 17px;
        color: #ffffff;
      }

      .savings-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #000000;
      }

      .savings-text-blue {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: #2c7ef8;
      }

      .product-button-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .product-button {
        display: flex;
        flex-direction: row;
        gap: 20px;
        background-color: #59ae43;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        height: 59px;
        width: 542px;
        padding: 16px 64px;
        color: white;
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        text-transform: uppercase;
      }

      .icon-center {
        display: flex;
        justify-content: center;
      }

      .product-checkout-icon {
        width: 20px;
        height: 20px;
        color: #ffffff;
      }

      .product-secure {
        width: 542px;
        height: 33px;
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid #cfcfcf;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .product-secure-text {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0px;
        color: #4d5254;
      }

      .secure-box {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        justify-content: center;
      }

      .secure-icon {
        height: 12px;
        width: 12px;
        color: #696969;
      }

      .secure-image-container {
        display: flex;
        flex-direction: row;
        gap: 3.4px;
        align-items: center;
      }

      .secure-image {
        display: flex;
        flex-direction: row;
        border: 0.75px solid #cfcfcf;
        /* padding: 3px 6px; */
        border-radius: 2px;
        padding-left: 5px;
        padding-right: 5px;
      }

      .secure-payment-image {
        width: 20px;
        height: 18px;
      }

      .product-no-content-text {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        color: #f82c2c;
        text-decoration: underline;
        text-transform: uppercase;
        text-underline-offset: 1px;
        text-decoration-thickness: 0.5px;
      }

      .product-satisfaction-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 550px;
        height: 88px;
        gap: 16px;

        /* height: 78px; */
      }

      .product-satisfaction-image {
        width: 88px;
        height: 88px;
      }

      .product-satisfaction-content {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
      }

      .satisfaction-days {
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        color: #4d5254;
      }
    }
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
