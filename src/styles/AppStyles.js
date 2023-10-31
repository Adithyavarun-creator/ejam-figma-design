import styled from "styled-components";
import { devices } from "../../breakpoints";

export const AppStyles = styled.div`
  @media ${devices.bigScreens} {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media ${devices.smallMobiles} {
    /* this is left */
    display: flex;
    flex-direction: column;
    gap: 20px;
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
