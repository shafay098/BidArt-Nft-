import React, { useState } from "react";
import { Images } from "../../assets/images";
const OffCanvas = () => {
  const [toggleBtnHome, setToggleBtnHome] = useState(false);
  const [toggleBtnExp, setToggleBtnExp] = useState(false);
  const handleToggleIcon = (btn) => {
    if (btn === "home") {
      setToggleBtnHome(!toggleBtnHome);
    } else if (btn === "explore") {
      setToggleBtnExp(!toggleBtnExp);
    }
  };
  return (
    <div id="offcanvas-section">
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="navbarOffcanvas"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-title" id="offcanvasScrollingLabel">
            <img src={Images.WebSiteLogSrc} alt="" className="img-fluid" />
          </div>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            className="btn rounded-circle border border-0 text-white btn-offcanvas-close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav d-flex flex-column off-canvas-ul">
            <li className="nav-item active">
              <a
                className="nav-link d-flex justify-content-between"
                href="#home"
              >
                <span>Home</span>
                <span
                  onClick={() => {
                    handleToggleIcon("home");
                  }}
                >
                  {toggleBtnHome === false ? (
                    <i
                      className="fa-solid fa-plus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHomeMenu"
                      aria-expanded="false"
                      aria-controls="collapseHomeMenu"
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-minus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseHomeMenu"
                      aria-expanded="false"
                      aria-controls="collapseHomeMenu"
                    ></i>
                  )}
                </span>
              </a>
              <div className="collapse collapse-vertical" id="collapseHomeMenu">
                <ul className="nav d-flex flex-column collapse-nav-off">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link d-flex justify-content-between"
                href="#home"
              >
                <span>Explore</span>
                <span
                  onClick={() => {
                    handleToggleIcon("explore");
                  }}
                >
                  {toggleBtnExp === false ? (
                    <i
                      className="fa-solid fa-plus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExpMenu"
                      aria-expanded="false"
                      aria-controls="collapseExpMenu"
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-minus"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExpMenu"
                      aria-expanded="false"
                      aria-controls="collapseExpMenu"
                    ></i>
                  )}
                </span>
              </a>
              <div className="collapse collapse-vertical" id="collapseExpMenu">
                <ul className="nav d-flex flex-column collapse-nav-off">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Explore 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Explore 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Explore 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Activity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Pages
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
