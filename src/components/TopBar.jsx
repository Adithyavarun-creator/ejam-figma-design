import React from "react";
import { MobileTopBarStyles, TopBarStyles } from "../styles/TopBarStyles";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHeart, FaMoneyBillWave } from "react-icons/fa";
import {
  MdOutlineVerified,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Header from "./Header";

export const navDatas = [
  {
    id: 1,
    icon: <SiAdguard />,
    text: "30 day satisfaction guarantee",
  },
  {
    id: 2,
    icon: <TbTruckDelivery />,
    text: "Free delivery on orders over $40.00",
  },
  {
    id: 3,
    icon: <FaRegHeart />,
    text: "50.000+ Happy Customers",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave />,
    text: "100% Money Back Guarantee",
  },
];

const TopBar = () => {
  return (
    <>
      <TopBarStyles className="flex-row">
        {navDatas.map((data) => (
          <div className="nav-box" key={data.id}>
            <span className="nav-box-icon">{data.icon}</span>
            <span className="nav-box-text">{data.text}</span>
          </div>
        ))}
      </TopBarStyles>
      <MobileTopBarStyles>
        <div className="mobile-topbar">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="mobile-verified-icon" />
          </div>
          <div className="mobile-center">
            <span>
              <MdOutlineVerified className="mobile-verified-icon" />
            </span>
            <span className="mobile-nav-box-text">
              30-DAY SATISFACTION GUARANTEE
            </span>
          </div>
          <MdOutlineKeyboardDoubleArrowRight className="mobile-verified-icon" />
        </div>
      </MobileTopBarStyles>
      {/* <Header /> */}
    </>
  );
};

export default TopBar;
