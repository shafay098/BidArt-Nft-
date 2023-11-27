import React from "react";

const ExploreMoreButton = (props) => {
  const { btnText = "Exlpore More", handleClickBtn } = props;
  return (
    <>
      <button
        className="btn text-white explore-more-btn px-4 effect-btn bg-primary border  border-0 rounded-5"
        onClick={() => {
          handleClickBtn();
        }}
      >
        {btnText}
      </button>
    </>
  );
};

export default ExploreMoreButton;
