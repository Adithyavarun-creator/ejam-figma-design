import React from "react";
import { DesktopPageStyles } from "../styles/DesktopViewStyles";
import Object from "../assets/product-specs.png";
import ProductImage from "../assets/product-image.png";
import { RiStarSFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { AiTwotoneCiCircle } from "react-icons/ai";
import { PiPercentBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";

import ApplePay from "../assets/cards/apple-pay.png";
import AmexPay from "../assets/cards/amex.png";
import GooglePay from "../assets/cards/google-pay.png";
import MasterCard from "../assets/cards/mastercard.png";
import PayPal from "../assets/cards/paypal.png";
import Visa from "../assets/cards/visa.png";
import Guarantee from "../assets/guarantee.png";

import TickImage from "../assets/tickgreenbg.png";
import BlueTickImage from "../assets/tick.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/image-4.png";

import UserPicture from "../assets/user.png";

const imagesArray = [Visa, PayPal, MasterCard, GooglePay, ApplePay, AmexPay];

export const positiveDatas = [
  {
    id: 1,
    subtext: "Negative Ion Technology may",
    maintext: "help with allergens",
  },
  {
    id: 2,
    subtext: "Designed for",
    maintext: "air rejuvenation",
  },
  {
    id: 3,
    subtext: "Perfect for every room",
    maintext: "in all types of places.",
  },
];

const DesktopViewPage = () => {
  return (
    <DesktopPageStyles>
      {/* Step 1 */}
      <div className="order-container">
        <div>
          <h1 className="order-title">Wait ! your order in progress.</h1>
        </div>
        <div>
          <span className="order-subtitle">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </span>
        </div>
      </div>
      {/* Step 2 */}
      <div className="steps-container">
        <div className="steps-box">
          <img src={TickImage} alt="" className="step-image-box" />
          <span className="step-text">
            <span className="step-number">Step 1 &nbsp;:</span>
            &nbsp;Cart Review
          </span>
        </div>
        <div className="steps-box">
          <img src={TickImage} alt="" className="step-image-box" />
          <span className="step-text">
            <span className="step-number">Step 2 &nbsp;:</span>
            &nbsp;Cart Review
          </span>
        </div>
        <div className="steps-box">
          <img src={Image3} alt="" className="step-image-box" />
          <span
            className="step-text"
            style={{ fontWeight: "700", color: "#000000" }}
          >
            <span
              className="step-number"
              style={{ fontWeight: "700", color: "#000000" }}
            >
              Step 3 &nbsp;:
            </span>
            &nbsp;Special Offer
          </span>
        </div>
        <div className="steps-box">
          <img src={Image4} alt="" className="step-image-box" />
          <span className="step-text">
            <span>Step 4 &nbsp;</span>
            &nbsp;Cart Review
          </span>
        </div>
      </div>
      {/* Step 3 */}
      <div className="product-container">
        {/* Product Image */}
        <div className="product-review-container">
          <div>
            <img src={Object} alt="" className="product-image" />
          </div>
          <div className="product-review-box">
            <div className="product-review-user">
              <div>
                <img src={UserPicture} alt="" className="product-user-image" />
              </div>
              <div className="product-user-details">
                <div>
                  <span>
                    <RiStarSFill className="star-icon" />
                  </span>
                  <span>
                    <RiStarSFill className="star-icon" />
                  </span>
                  <span>
                    <RiStarSFill className="star-icon" />
                  </span>
                  <span>
                    <RiStarSFill className="star-icon" />
                  </span>
                  <span>
                    <RiStarSFill className="star-icon" />
                  </span>
                </div>
                <div>
                  <div className="product-user-verify">
                    <span className="product-user-name">Ken T.</span>
                    <RiVerifiedBadgeFill className="product-verify-icon" />
                    <span className="product-user-vertify-text">
                      Verified Customer
                    </span>
                  </div>

                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <article className="product-review-text">
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </article>
            </div>
          </div>
        </div>
        <div className="product-detail-container">
          <div className="product-detail-heading">
            <h2 className="product-detail-special">
              <span className="product-special">one time only</span>
              &nbsp;special price for 6 extra Clarifion for only&nbsp;
              <span className="product-special">$14 each</span> ($84.00 total!)
            </h2>
          </div>
          <div className="mobile-image">
            <img src={Object} alt="" className="product-image" />
          </div>
          <div className="product-title-price-box">
            <div className="product-image-smallbox">
              <img
                src={ProductImage}
                className="product-image-small"
                alt="product-small"
              />
            </div>

            <div className="product-title-box">
              <div className="space-between">
                <div>
                  <span className="product-title">Clarifion Air Ionizer</span>
                </div>
                <div className="product-prices">
                  <div>
                    <span className="product-original-price">$180</span>
                  </div>
                  <div>
                    <span className="product-special-price">$84</span>
                  </div>
                </div>
              </div>
              <div className="product-star-box">
                <span>
                  <RiStarSFill className="star-icon" />
                </span>
                <span>
                  <RiStarSFill className="star-icon" />
                </span>
                <span>
                  <RiStarSFill className="star-icon" />
                </span>
                <span>
                  <RiStarSFill className="star-icon" />
                </span>
                <span>
                  <RiStarSFill className="star-icon" />
                </span>
              </div>
              <div className="product-stock-box">
                <div className="product-circle-box">
                  <AiTwotoneCiCircle className="product-circle-icon" />
                </div>
                <div>
                  <span className="product-stock-text">12 left in stock</span>
                </div>
              </div>
              <div className="product-description-box">
                <span className="product-description-text">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </span>
              </div>
            </div>
          </div>
          <div className="product-positive-box">
            {positiveDatas.map((data) => (
              <div className="product-positive-points" key={data.id}>
                <img src={BlueTickImage} className="product-positive-icon" />
                <p className="product-subtext">
                  {data.subtext} &nbsp;
                  <span className="product-maintext">{data.maintext}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="product-savings-container">
            <div className="savings-box">
              <div className="savings-icon-box">
                <PiPercentBold className="savings-icon" />
              </div>
              <div>
                <h3 className="savings-text">
                  Save <span className="savings-text-blue">53%</span> and get{" "}
                  <span className="savings-text-blue">6 extra Clarifision</span>{" "}
                  for only <span className="savings-text-blue">$14 Each</span>.
                </h3>
              </div>
            </div>
          </div>
          <div className="product-button-container">
            <div className="product-button">
              <div>
                <span>Yes - Claim my discount </span>
              </div>
              <div className="icon-center">
                <BsArrowRight className="product-checkout-icon" />
              </div>
            </div>
            <div className="product-secure">
              <div>
                <span className="product-secure-text">Free Shipping</span>
              </div>

              <span
                style={{
                  width: "16px",
                  border: "0.5px solid #CFCFCF",
                  rotate: "90deg",
                }}
                className="line"
              ></span>

              <div className="secure-box">
                <GrSecure className="secure-icon" />
                <span className="product-secure-text">
                  Secure 256-bit SSL encryption.
                </span>
              </div>

              <span
                style={{
                  width: "16px",
                  border: "0.5px solid #CFCFCF",
                  rotate: "90deg",
                }}
                className="line"
              ></span>

              <div className="secure-image-container">
                {imagesArray &&
                  imagesArray.map((image, i) => (
                    <div className="secure-image" key={i}>
                      <img
                        src={image}
                        alt=""
                        className="secure-payment-image"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-no-content">
              <h2 className="product-no-content-text">
                No thanks, I don’t want this.
              </h2>
            </div>
          </div>

          <div className="product-satisfaction-container">
            <div>
              <img
                src={Guarantee}
                alt=""
                className="product-satisfaction-image"
              />
            </div>
            <div>
              <article className="product-satisfaction-content">
                If you are not completely thrilled with your Clarifion - We have
                a{" "}
                <span className="satisfaction-days">
                  30 day satisfaction guarantee
                </span>
                . Please refer to our return policy at the bottom of the page
                for more details. Happy Shopping!
              </article>
            </div>
          </div>
        </div>
      </div>
    </DesktopPageStyles>
  );
};

export default DesktopViewPage;
