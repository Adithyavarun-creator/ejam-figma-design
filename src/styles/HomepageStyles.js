import styled from "styled-components";
import { devices } from "../../breakpoints";

export const HompepageStyles = styled.div`
  @media ${devices.bigScreens} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 300px;

    .homepage-box {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      .link-box {
        padding: 16px 24px;
        background-color: black;
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 34px;
        text-transform: capitalize;
      }

      span {
        color: #000000;
        font-weight: 700;
        font-size: 30px;
        text-transform: capitalize;
      }
    }
  }

  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 60px;
    padding: 10px;

    .homepage-box {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .link-box {
        padding: 10px 14px;
        background-color: black;
        cursor: pointer;
        color: #ffffff;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 18;
        text-transform: capitalize;
      }

      span {
        color: #000000;
        font-weight: 700;
        font-size: 16px;
        text-transform: capitalize;
      }
    }
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
