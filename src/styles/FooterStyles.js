import styled from "styled-components";
import { devices } from "../../breakpoints";

export const FooterStyles = styled.footer`
  @media ${devices.bigScreens} {
    height: 88px;
    padding: 0 140px;
    background-color: #252f3d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .footer-copyright {
      display: flex;
      flex-direction: row;
      gap: 16px;
      height: 22px;
      align-items: center;
    }

    .footer-liner {
      width: 24px;
      border: 1px solid #ffffff;
      rotate: -90 deg;
    }

    .footer-text {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }
    .footer-lock-image {
      width: 15px;
      height: 15px;
      border: 1.33px;
      color: #ffffff;
    }
  }

  @media ${devices.smallMobiles} {
    height: 102px;
    padding: 20px;
    background-color: #252f3d;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    align-items: center;

    .footer-copyright {
      display: flex;
      flex-direction: row;
      height: 33px;
      align-items: center;
      /* width: Hug (301px) */
      padding: 8px 0px;
      border-radius: 4px;
      gap: 12px;
    }

    .footer-liner {
      width: 8px !important;
      border: 0.3px solid #ffffff;
      rotate: -90 deg;
    }

    .footer-text {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      line-height: 16.8px;
      text-transform: capitalize;
    }
    .footer-lock-image {
      width: 13px;
      height: 13px;
      border: 1.33px;
      color: #ffffff;
    }
  }

  @media ${devices.smallMobiles} {
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

  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }
`;
