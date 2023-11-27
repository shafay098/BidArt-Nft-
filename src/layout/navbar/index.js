import React, { useRef, useState } from "react";
import { Images } from "../../assets/images";
import OffCanvas from "./OffCanvas";
const Navbar = () => {
  const [showModalNotification, setShowModalNotification] = useState(false);
  const [showModalUserProfile, setShowModalUserProfile] = useState(false);
  const [showModalSearch, setShowModalSearch] = useState(false);
  const [darktheme, setDarkTheme] = useState(true);
  const copyTextRef = useRef(null);
  const handleShowModal = (value) => {
    if (value === "notification") {
      setShowModalNotification(!showModalNotification);
      setShowModalUserProfile(false);
      setShowModalSearch(false);
    } else if (value === "userProfile") {
      setShowModalUserProfile(!showModalUserProfile);
      setShowModalNotification(false);
      setShowModalSearch(false);
    } else if (value === "searchInput") {
      setShowModalSearch(!showModalSearch);
      setShowModalUserProfile(false);
      setShowModalNotification(false);
    }
  };
  const handleTheme = () => {
    setDarkTheme(!darktheme);
  };
  const handleCopy = () => {
    const copyValue = copyTextRef.current.innerText;
    navigator.clipboard.writeText(copyValue);
    console.log(copyValue);
  };
  return (
    <>
      <nav className="container-fluid" id="navbar-section">
        <div className="row h-100">
          <div className="col-xl-2 col-xxl-2 col-lg-2 col-md-4 col-sm-4 col-6 d-flex align-items-center">
            <div className="nav-logo w-lg-100 w-auto">
              <a href="#home" className="navbar-logo">
                <img
                  src={Images.WebSiteLogSrc}
                  alt=""
                  className="img-fluid img-responsive"
                />
              </a>
            </div>
          </div>
          <div className="col-xl-10 col-xxl-10 col-lg-10 col-md-8 col-sm-8 col-6 d-flex align-items-center justify-content-between ">
            <form
              className="d-flex align-items-center navbar-search position-relative"
              role="search"
            >
              <input
                className=" bg-transparent rounded-5 nav-search-box text-primary"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn search-nav-btn position-absolute top-0 end-0 text-dark"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <ul className="nav nav-ul nvabar-ul-gap">
              <li className="nav-item nav-li-drop dropdown">
                <a
                  className="nav-link text-white after-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#home"
                >
                  Home
                </a>
                <ul className="dropdown-menu nav-dropdown bg-dark-gradient">
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-li-drop">
                <a
                  className="nav-link text-white after-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#home"
                >
                  Explore
                </a>
                <ul className="dropdown-menu nav-dropdown bg-dark-gradient">
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#home">
                      Link 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  How it works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Pages
                </a>
              </li>
            </ul>
            <div className="header-btns d-flex">
              <button
                onClick={() => handleShowModal("searchInput")}
                className="btn search-btn rounded-circle postion-relative border border-0 text-white circle-btn-w-h"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              {showModalSearch && (
                <div className="searh-btn-input">
                  <input
                    className=" bg-transparent rounded-5 nav-search-box text-primary"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn search-nav-btn position-absolute top-0 end-0 text-dark"
                    type="submit"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  handleShowModal("notification");
                }}
                className="btn notification-btn rounded-circle border border-0 text-white circle-btn-w-h"
              >
                <span className="position-absolute top-0 start-75 translate-middle badge rounded-circle border border-0 p-1 bg-danger">
                  9+
                </span>
                <i className="fa-solid fa-bell dropdown-toggle"></i>
              </button>
              {showModalNotification && (
                <ul className="dropdown-notification">
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li">
                    <a href="#home" className="dropdown-item">
                      <div className="card notification-menu-card">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="notification-card-img"></div>
                          </div>
                          <div className="col-8">
                            <div className="notification-li-text">
                              <p className="m-0">vikela8806@glalen.com</p>
                              <h4 className="m-0">Digital NFT Art</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-li d-flex justify-content-center py-3">
                    <button className="btn  view-more-btn px-4 effect-btn bg-primary border  border-0 rounded-5">
                      View More
                    </button>
                  </li>
                </ul>
              )}

              <button
                className="btn profile-btn rounded-circle border border-0 text-white circle-btn-w-h"
                onClick={() => {
                  handleShowModal("userProfile");
                }}
              >
                <i className="fa-solid fa-user"></i>
              </button>
              {showModalUserProfile && (
                <div className="dropdown-user-profile">
                  <div className="card profile-card">
                    <div className="card-body">
                      <div className="user-details">
                        <h3 className="user-name">Thomas G. Smith</h3>
                        <h4 className="user-balance">13.45 ETH</h4>
                        <div className="user-profile-link">
                          <div className="user-pl-group">
                            <span ref={copyTextRef}>1BAkZn7LrU43oK8Jv...</span>
                            <button
                              className="user-copy-link-btns"
                              onClick={() => {
                                handleCopy();
                              }}
                            >
                              <i className="fa-solid fa-copy"></i>
                            </button>
                          </div>
                          <ul className="user-profile-ul custom-ul">
                            <li>
                              <a href="#user-profile.html">My Profile</a>
                            </li>
                            <li>
                              <a href="#user-items.html">My Item</a>
                            </li>
                            <li>
                              <a href="#user-wallet.html">My Wallet</a>
                            </li>
                            <li>
                              <a href="#user-account-settings.html">Settings</a>
                            </li>
                            <li>
                              <div className="theme-switch d-flex justify-content-between">
                                <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckChecked"
                                >
                                  Dark Mode
                                </label>
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckChecked"
                                    checked={darktheme === true}
                                    onChange={() => {
                                      handleTheme();
                                    }}
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a href="login.html">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                      <button className="btn create-btn text-white  px-4 effect-btn bg-primary border  border-0 rounded-5">
                        <span>Create</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <button
                className="btn drawer-btn rounded-circle border border-0 text-white circle-btn-w-h"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarOffcanvas"
                aria-controls="offcanvasScrolling"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <button className="btn text-white connect-wallet-btn effect-btn bg-primary border  border-0 rounded-5">
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <OffCanvas />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
