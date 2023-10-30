import styled from "styled-components";
import { devices } from "../../breakpoints";

export const TopBarStyles = styled.nav`
  @media ${devices.bigScreens} {
    background-color: #252f3d;
    height: 50px;
    padding-left: 140px;
    padding-right: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* gap: 60px; */

    .nav-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      justify-content: space-around;
    }

    .nav-box-text {
      color: white;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: lighter;
    }

    .nav-box-icon {
      color: white;
      height: 20px;
      width: 20px;
    }

    .topbar-mobile {
      display: none;
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

export const MobileTopBarStyles = styled.nav`
  @media ${devices.smallMobiles} {
    background-color: #252f3d;
    height: 42px;
    padding: 10px 20px;

    .mobile-topbar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .mobile-verified-icon {
      width: 18.2px;
      height: 18.2px;
      color: #ffffff;
    }

    .mobile-center {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      justify-content: center;
    }

    .mobile-nav-box-text {
      color: white;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: lighter;
    }
  }

  @media ${devices.bigScreens} {
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
