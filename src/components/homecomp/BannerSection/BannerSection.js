import React from "react";
import BrandSwiper from "../BannerSwiper/Bannerswiper";
import { Images } from "../../../assets/images";
const Banner_Section1 = () => {
  return (
    <div
      className="container-fluid p-3 custom-class-banner-section1-main-cont mt-5 rounded-5"
      id="banner-section"
      style={{ backgroundImage: `url(${Images.BannerImgSrc})` }}
      transition-style="in:circle:bottom-right"
    >
      <div className="row">
        <div className="col-12 col-lg-12 col-xl-6 gap-20 p-5 rounded-5 custom-class banner-left-bg animate__animated animate__fadeInLeft">
          <h1 className="mb-4 text-white respo ">
            The Best Beneficial Place to Collect , Buy and Sell NFT Marketplace
          </h1>
          <p className="h6 mb-4 text-white ">
            Secure and secret NFTs for gaming, entertainment, metaverse and data
            management time capsules.
          </p>
          <div className="hstack gap-3 ">
            <button type="button" className="btn btn-primary rounded-5 px-4">
              Explore
            </button>
            <button type="button" className="btn btn-light rounded-5 px-4 ">
              Create
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-6">
          <BrandSwiper />
        </div>
      </div>
    </div>
  );
};

export default Banner_Section1;
