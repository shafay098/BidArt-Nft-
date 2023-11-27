import React from "react";
import { useNavigate } from "react-router-dom";

const JoinNftPlatform = () => {
  const navigation = useNavigate();
  const handleNavSignUp = () => {
    navigation("/signup");
  };
  return (
    <div
      className="container-fluid  margin-top margin-bottom-1x"
      id="join-nft-platform-section"
    >
      <div className="row px-3">
        <div className="col-12  nft-platform-container rounded-4">
          <div className="display-flex align-items-around justify-content-between text-center">
            <h1 className="mb-3">Join our biggest NFTs platform</h1>
            <p className="mb-3 custom-subtitle">
              Exercitation veniam consequat sunt nostrud amet. It is a long
              established fact that a reader
            </p>
            <button
              type="button"
              className="btn btn-primary button-all-hover rounded-5 btn-md"
              onClick={(e) => {
                e.stopPropagation();
                handleNavSignUp();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNftPlatform;
