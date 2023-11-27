import React from "react";
import "../../../common/main.css";
import CompetAdvCard from "./CompetAdvCard";
import { competCardData } from "./competCardData";
const CompetativeAdvantageSection = () => {
  const allCompetCard = competCardData;
  return (
    <div
      className="container-fluid compet-adv-section margin-top margin-bottom-1x"
      id=""
    >
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="compet-adv-heading w-100 text-center">
            Competitive Advantages
          </h2>
        </div>
      </div>
      <div className="row gy-xl-0 gy-lg-0 gy-md-4 gy-sm-4 gy-4">
        {allCompetCard.map((competCard) => {
          const { id } = competCard;
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={id}>
              <CompetAdvCard competCard={competCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetativeAdvantageSection;
