import React from "react";
import { MobilePageStyles } from "../styles/MobilePageStyles";
import TickIcon from "../assets/tickgreenbg.png";
import Number3 from "../assets/image-3.png";
import Number4 from "../assets/image-4.png";
import ProductSpecs from "../assets/product-specs.png";
import LockImage from "../assets/lock-dark.png";

import ProductImage from "../assets/product-image.png";
import PercentImage from "../assets/percent-image.png";
import { RiStarSFill } from "react-icons/ri";
import { AiTwotoneEuroCircle, AiTwotoneLock } from "react-icons/ai";
import TickImage from "../assets/tick.png";

import ShopPay from "../assets/cards/shop-pay.png";
import ApplePay from "../assets/cards/apple-pay.png";
import AmexPay from "../assets/cards/amex.png";
import GooglePay from "../assets/cards/google-pay.png";
import MasterCard from "../assets/cards/mastercard.png";
import PayPal from "../assets/cards/paypal.png";
import Visa from "../assets/cards/visa.png";
import Guarantee from "../assets/guarantee.png";
import Footer from "./Footer";

const MobileViewPage = () => {
  const imagesArray = [
    ShopPay,
    Visa,
    PayPal,
    MasterCard,
    GooglePay,
    ApplePay,
    AmexPay,
  ];

  return (
    <>
      <MobilePageStyles>
        <div className="order-progress-container">
          <div>
            <h1 className="order-progress-text">
              Wait ! your order in progress.
            </h1>
          </div>
          <div>
            <span className="order-progress-subtext">
              Lorem, ipsum dolor sit amet consectetur
            </span>
          </div>
        </div>

        <div className="steps-container">
          <div className="step-box">
            <div>
              <img src={TickIcon} className="step-image" />
            </div>

            <div>
              <span className="step-text">Cart Review</span>
            </div>
          </div>
          <div className="step-box">
            <div>
              <img src={TickIcon} className="step-image" />
            </div>

            <div>
              <span className="step-text">Cart Review</span>
            </div>
          </div>
          <div className="step-box">
            <div>
              <img src={Number3} className="step-image" />
            </div>

            <div>
              <span className="step-text">Cart Review</span>
            </div>
          </div>
          <div className="step-box">
            <div>
              <img src={Number4} className="step-image" />
            </div>
            <div>
              <span className="step-text">Cart Review</span>
            </div>
          </div>
        </div>

        <div className="offer-product-container">
          <div>
            <h2 className="offer-text-note">
              <span
                className="offer-text-blue"
                style={{ textTransform: "uppercase" }}
              >
                ONE TIME ONLY
              </span>{" "}
              special price for 6 extra Clarifion for only{" "}
              <span className="offer-text-blue">$14 EACH</span> ($84.00 total!)
            </h2>
          </div>
          <div className="product-specs">
            <img src={ProductSpecs} alt="" className="" />
          </div>

          <div className="product-detail-container">
            <div className="product-image-details">
              <img src={ProductImage} alt="" className="product-detail-image" />
            </div>

            <div className="product-desc-details">
              <div className="name-and-price">
                <div>
                  <h2>Clarifion Air Ionizer</h2>
                </div>
                <div className="rows">
                  <span className="product-original-value">$180</span>
                  <span className="product-offer-value">$84</span>
                </div>
              </div>
              <div>
                <div className="product-star-iconbox">
                  <RiStarSFill className="product-star-icon" />
                  <RiStarSFill className="product-star-icon" />
                  <RiStarSFill className="product-star-icon" />
                  <RiStarSFill className="product-star-icon" />
                  <RiStarSFill className="product-star-icon" />
                </div>
              </div>
              <div className="product-stock-container">
                <div className="row">
                  <div className="product-stock-iconbox">
                    <AiTwotoneEuroCircle className="product-stock-icon" />
                  </div>
                  <div>
                    <span className="row-stock">12 left in Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-justify">
            <p className="product-text">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>

          <div className="product-advantages">
            <div className="product-advantage-list">
              <img src={TickImage} alt="" className="product-tick-image" />
              <h2 className="product-advantage-text">
                Negative Ion Technology may{" "}
                <span className="product-advantage-plus">
                  help with allergens
                </span>
              </h2>
            </div>

            <div className="product-advantage-list">
              <img src={TickImage} alt="" className="product-tick-image" />
              <h2 className="product-advantage-text">
                Designed for&nbsp;
                <span className="product-advantage-plus">air rejuvenation</span>
              </h2>
            </div>

            <div className="product-advantage-list">
              <img src={TickImage} alt="" className="product-tick-image" />
              <h2 className="product-advantage-text">
                <span className="product-advantage-plus">
                  Perfect for every room&nbsp;
                </span>
                in all types of places.
              </h2>
            </div>
          </div>

          <div className="product-discount-box">
            <div>
              <img
                src={PercentImage}
                className="product-discount-image"
                alt=""
              />
            </div>
            <div>
              <span className="product-discount-text">
                Save <span className="blue">53%</span> and get{" "}
                <span className="blue">6 extra Clarifision</span> for only{" "}
                <span className="blue">$14 Each</span>.
              </span>
            </div>
          </div>

          <div className="product-button-box">
            <button className="product-btn">
              Yes - Claim my discount &nbsp; &#x279C;
            </button>

            <div className="product-shipping-box">
              <div className="product-ship-box">
                <span>Free Shipping</span>
                <span className="linebreak"></span>
                <span>
                  {/* <AiTwotoneLock className="product-secure-icon" /> */}
                  <img
                    src={LockImage}
                    style={{
                      width: "12px",
                      height: "12px",
                      marginRight: "8px",
                    }}
                    className=""
                    alt=""
                  />
                  Secure 256-bit SSL encryption
                </span>
              </div>
              <div className="hr-line" />
              <div className="product-cards-box">
                {imagesArray.map((image, i) => (
                  <div key={i}>
                    <img src={image} className="product-card-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="product-reject-text">
            <span>No thanks, I don’t want this.</span>
          </div>

          <div className="product-guarantee-box">
            <div>
              <img src={Guarantee} className="product-guarantee-image" alt="" />
            </div>
            <div>
              <article className="product-guarantee-text">
                If you are not completely thrilled with your Clarifion - We have
                a&nbsp;
                <span className="product-guarantee-dark">
                  30 day satisfaction guarantee
                </span>
                . Please refer to our return policy at the bottom of the page
                for more details. Happy Shopping!
              </article>
            </div>
          </div>
        </div>
      </MobilePageStyles>
    </>
  );
};

export default MobileViewPage;
