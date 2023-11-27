import React, { useEffect, useState } from "react";
import TopSellerCard from "../topsellercard/TopSellerCard";
import Data from "./top-seller-data.json";
const TopSellerSection = () => {
  const [allCardData, setAllCardData] = useState([]);
  useEffect(() => {
    if (Data) {
      setAllCardData(Data);
    }
  }, []);
  return (
    <div className="container-fluid" id='top-seller-section'>
      <h2 className="text-center text-white py-3">Top Seller in 1 Week</h2>
      <div className="row g-3">
        {allCardData &&
          allCardData.map((cardData) => {
            const {id} = cardData;
          return  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" key={id}>
              <TopSellerCard cardData={cardData}  />
            </div>;
          })}
      </div>
    </div>
  );
};

export default TopSellerSection;
