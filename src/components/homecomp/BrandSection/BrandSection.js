import React from "react";
import BrandSlider from "../BrandSlider/BrandSlider";

const Brand_Section = () => {
  return (
    <div className="container-fluid margin-top" id="brands-slider-section">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-center font-header-with-style text-white">
            The world's no.1 NFT platform for thousands of brands
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-0">
          <BrandSlider />
        </div>
      </div>
    </div>
  );
};

export default Brand_Section;
