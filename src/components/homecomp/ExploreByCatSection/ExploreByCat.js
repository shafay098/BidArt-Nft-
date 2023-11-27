import React from "react";
import Categoryswiper from "../Cateogry-Swiper/category_swiper";

const Explore_by_Cat_Section = () => {
  return (
    <div className="container-fluid text-center" id="explore-category-section">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-white margin-top">Explore By Catagory</h1>
        </div>  
      </div>
      <div className="row">
        <div className="col-12">
          <Categoryswiper />
        </div>
      </div>
    </div>
  );
};

export default Explore_by_Cat_Section;
