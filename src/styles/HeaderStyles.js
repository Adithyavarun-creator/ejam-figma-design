import styled from "styled-components";
import { devices } from "../../breakpoints";

export const HeaderStyles = styled.div`
  @media ${devices.bigScreens} {
    height: 96px;
    padding: 30px 127px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .header-main-logo {
      width: 192px;
      height: 36px;
    }

    .header-logo {
      width: 100%;
      object-fit: fill;
    }

    .header-secure-box {
      display: flex;
      flex-direction: row;
      gap: 32px;
      align-items: center;
    }

    .header-secure-logo {
      width: 88px;
      height: 32px;
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
  }

  @media ${devices.smallMobiles} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;

    .header-main-logo {
      width: 106.67px;
      height: 20px;
    }

    .header-logo {
      width: 44px;
      height: 16px;
    }

    .header-secure-box {
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
    }

    .header-secure-logo {
      width: 44px;
      height: 16px;
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
