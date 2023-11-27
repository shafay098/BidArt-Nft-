import React from "react";

const CompetAdvCard = (props) => {
  const { competCard } = props;
  const { competTitle, competSubTitle, competIcon } = competCard;

  return (
    <>
      <div className="card compet-adv-card w-100 rounded-3">
        <div className="card-body text-center px-4 py-5">
          <div className="compet-adv-icon mb-3">
            {competIcon} 
          </div>
          <h2 className="compet-adv-title">{competTitle}</h2>
          <h5 className="compet-adv-subtitle">{competSubTitle}</h5>
        </div>
      </div>
    </>
  );
};

export default CompetAdvCard;
