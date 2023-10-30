// export const size = {
//   TabletIpadsMin: "768px",
//   TabletIpadsMax: "1024px",
//   TabletsMobilesMin: "481px",
//   TabletsMobilesMax: "767px",
//   SmallMobileMin: "320px",
//   SmallMobileMax: "480px",
//   LaptopsDesktopMin: "1025px",
//   LaptopsDesktopMax: "1280px",
// };

// export const devices = {
//   //tabletsIpads
//   tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
//   tabletsAndMobiles: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
//   smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
//   bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
// };

export const size = {
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  TabletsMobilesMin: "481px",
  TabletsMobilesMax: "767px",
  SmallMobileMin: "360px",
  SmallMobileMax: "500px",
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1499px",
  bigScreens: "1500px",
  smallerScreens: "359px",
};

export const devices = {
  //tabletsIpads
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  tabletsAndMobiles: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
  smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
  bigScreens: `(min-width: ${size.bigScreens})`,
  smallScreens: `(max-width: ${size.smallerScreens})`,
};

// @media (min-width: 1281px) {

// }
