import React from "react";
import { NavLink } from "react-router-dom";
const LoginHeader = () => {
  return (
    <div className="container-fluid" id="login-header-section">
      <div className="row h-100">
        <div className="col-12 my-auto">
          <div className="login-title" aria-hidden="true">
            <h1>Login</h1>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center">
              <li className="breadcrumb-item">
                <NavLink to="/" className="text-white link-hover-bl">
                  Home
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
