import React, { useState, useEffect, useRef } from "react";
import "../../common/main.css";
const Footer = () => {
  const [toggleBtnMarketPlace, setToggleBtnMarketPlace] = useState(false);
  const [toggleBtnAccount, setToggleBtnAccount] = useState(false);
  const [toggleBtnCompany, setToggleBtnCompany] = useState(false);
  const accountRef = useRef(null);
  const companyRef = useRef(null);
  const marketplaceRef = useRef(null);
  const toggleBtnOne = useRef(null);
  const toggleBtnTwo = useRef(null);
  const toggleBtnThree = useRef(null);
  const getWindowSize = () => {
    const { innerWidth } = window;
    return innerWidth;
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    const toggleIdandBtn = () => {
      if (windowSize < 991) {
        marketplaceRef.current.setAttribute("id", "collapseMarketPlaceMenu");
        accountRef.current.setAttribute("id", "collapseAccountMenu");
        companyRef.current.setAttribute("id", "collapseCompanyMenu");
        toggleBtnOne.current.style.display = "block";
        toggleBtnTwo.current.style.display = "block";
        toggleBtnThree.current.style.display = "block";
      } else {
        marketplaceRef.current.removeAttribute("id");
        accountRef.current.removeAttribute("id");
        companyRef.current.removeAttribute("id");
        toggleBtnOne.current.style.display = "none";
        toggleBtnTwo.current.style.display = "none";
        toggleBtnThree.current.style.display = "none";
      }
    };
    toggleIdandBtn();
    window.addEventListener("resize", handleWindowResize);
    console.log("size with no return", windowSize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      console.log("size with return", windowSize);
    };
  }, [windowSize]);
  const handleToggleIcon = (btn) => {
    if (btn === "marketplace") {
      setToggleBtnMarketPlace(!toggleBtnMarketPlace);
    } else if (btn === "account") {
      setToggleBtnAccount(!toggleBtnAccount);
    } else if (btn === "company") {
      setToggleBtnCompany(!toggleBtnCompany);
    }
  };
  const marketPlaceUlList = [
    "All NFTs",
    "Popular Art",
    "Digital Art",
    "Trending",
    "Explore Details",
    "Live Action",
  ];
  const accountUlList = [
    "Profile",
    "My Collection",
    "Create & Upload",
    "Account Setting",
    "Connect wallet",
    "Wishlist",
  ];
  const companyUlList = [
    "Recent News",
    "How it Works",
    "About Us",
    "Contact Us",
    "Help Center & FAQ",
  ];
  return (
    <div className="container-fluid footer-section">
      <div className="row pb-5 my-4">
        <div className="col-lg-8 col-sm-12">
          <div className="row">
            <div className="col-lg-4 sm-12">
              <h3 className="footer-heading w-100 d-flex justify-content-between">
                <span>Marketplace</span>
                <span
                  onClick={() => {
                    handleToggleIcon("marketplace");
                  }}
                  ref={toggleBtnOne}
                >
                  {toggleBtnMarketPlace === false ? (
                    <i
                      className="fa-solid fa-plus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMarketPlaceMenu"
                      aria-expanded="false"
                      aria-controls="collapseMarketPlaceMenu"
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-minus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMarketPlaceMenu"
                      aria-expanded="false"
                      aria-controls="collapseMarketPlaceMenu"
                    ></i>
                  )}
                </span>
              </h3>
              <div
                className={`footer-top-ul ${
                  windowSize < 991 ? "collapse collapse-vertical" : ""
                } `}
                ref={marketplaceRef}
              >
                <ul>
                  {marketPlaceUlList.map((ele, index) => {
                    return (
                      <li key={index}>
                        <a href="#home">{ele}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 sm-12">
              <h3 className="footer-heading w-100 d-flex justify-content-between">
                <span>Account</span>
                <span
                  onClick={() => {
                    handleToggleIcon("account");
                  }}
                  ref={toggleBtnTwo}
                >
                  {toggleBtnAccount === false ? (
                    <i
                      className="fa-solid fa-plus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAccountMenu"
                      aria-expanded="false"
                      aria-controls="collapseAccountMenu"
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-minus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAccountMenu"
                      aria-expanded="false"
                      aria-controls="collapseAccountMenu"
                    ></i>
                  )}
                </span>
              </h3>
              <div
                className={`footer-top-ul ${
                  windowSize < 991 ? "collapse collapse-vertical" : ""
                } `}
                ref={accountRef}
              >
                <ul>
                  {accountUlList.map((ele, index) => {
                    return (
                      <li key={index}>
                        <a href="#home">{ele}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 sm-12">
              <h3 className="footer-heading w-100 d-flex justify-content-between">
                <span>Company</span>
                <span
                  onClick={() => {
                    handleToggleIcon("company");
                  }}
                  ref={toggleBtnThree}
                >
                  {toggleBtnCompany === false ? (
                    <i
                      className="fa-solid fa-plus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCompanyMenu"
                      aria-expanded="false"
                      aria-controls="collapseCompanyMenu"
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-minus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCompanyMenu"
                      aria-expanded="false"
                      aria-controls="collapseCompanyMenu"
                    ></i>
                  )}
                </span>
              </h3>
              <div
                className={`footer-top-ul ${
                  windowSize < 991 ? "collapse collapse-vertical" : ""
                } `}
                ref={companyRef}
              >
                <ul>
                  {companyUlList.map((ele, index) => {
                    return (
                      <li key={index}>
                        <a href="#home">{ele}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="subscrition-social-links">
            <h3 className="footer-heading">Subscribe to our newsletter.</h3>
            <div className="subscriton-field">
              <input type="text" placeholder="Enter Your Email" />
              <button className="sub-email-btn">
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7014 9.03523C25.0919 8.64471 25.0919 8.01154 24.7014 7.62102L18.3374 1.25706C17.9469 0.866533 17.3137 0.866533 16.9232 1.25706C16.5327 1.64758 16.5327 2.28075 16.9232 2.67127L22.5801 8.32812L16.9232 13.985C16.5327 14.3755 16.5327 15.0087 16.9232 15.3992C17.3137 15.7897 17.9469 15.7897 18.3374 15.3992L24.7014 9.03523ZM0.806641 9.32812H23.9943V7.32812H0.806641V9.32812Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="www.xyz.com">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row gradient-top-border">
        <div className="col-12 col-12 d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column justify-content-between align-items-xl-center align-items-lg-center align-items-md-center align-items-sm-center align-items-start py-4">
          <div className="copyright-text">
            <p className="m-0">Copyright 2022. Created by Thememarch.</p>
          </div>
          <div className="footer-bottom-ul">
            <ul className="d-flex h-100 m-0 p-0">
              <li className="ps-xl-4 ps-lg-4 ps-md-4 ps-sm-4 ps-0">
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li className="ps-4">
                <a href="terms-condition.html">Term & Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
