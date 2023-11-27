import React from "react";
import { Top_Collection_Swiper_data } from "../../../assets/helper/DummyData";
import ExploreMoreButton from "../../common/button/exploremorebutton/ExploreMoreButton";
import CustomCard from "../Card/Custom_Card";

const Top_Collection = () => {
  const clasess_obj = {
    header: "Top_Collection-header",
    body: "Top_Collection-body",
  };
  const btnText = "Explore More";
  const handleClickBtn = () => {
    console.log(btnText);
  };
  return (
    <div className="container-fluid margin-top" id="top-collection-section">
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-between">
          <h1 className="text-white">Top Collection</h1>
          <ExploreMoreButton
            btnText={btnText}
            handleClickBtn={handleClickBtn}
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="top-collection-card-container">
              {Top_Collection_Swiper_data.map((item) => {

                return (               
                
                    <CustomCard
                      key={item.id}
                      data={item}
                      sockets={"collection"}
                      clasess={clasess_obj}
                    />
                
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_Collection;
