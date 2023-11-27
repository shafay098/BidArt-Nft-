import React from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_password: "",
      notify_email: false,
      notify_news_letter: false,
    },
    validationSchema: Yup.object({
      user_email: Yup.string().email().required("Email is required"),
      user_password: Yup.string()
        .required("No password provided")
        .min(8, "Password is too short"),
    }),
    onSubmit: function (values, { resetForm }) {
      alert(
        `You are registered! Email: ${values.user_email}. ${values.user_password}`
      );
      resetForm();
    },
  });
  return (
    <div
      className="container-fluid gradient-top-border"
      id="login-form-section"
    >
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="login-form py-4">
            <div className="login-form-wrapper">
              <div className="login-form-title text-center">
                <h2>Login Account</h2>
              </div>
              <div className="social-medial-links-list position-relative pb-4 gradient-bottom-border mb-4">
                <ul className="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-row gap-xl-0 gap-lg-0 gap-md-0 gap-sm-0 gap-3 flex-column justify-content-around p-0 m-0">
                  <li>
                    <NavLink to="www.google.com" className="d-flex gap-2">
                      <span>
                        <i className="fa-brands fa-google"></i>
                      </span>
                      <span>Google</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="www.facebook.com" className="d-flex gap-2">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                      <span>Facebook</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="www.linkedin.com" className="d-flex gap-2">
                      <span>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </span>
                      <span>Linkedin</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <form action="" onSubmit={formik.handleSubmit} autoComplete="off">
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control rounded-pill login-input"
                    id="user_email"
                    name="user_email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                    autoComplete="off"
                  />
                  <label for="floatingInput" className="login-floating-label">
                    Your Email
                  </label>
                  {formik.touched.user_email && formik.errors.user_email && (
                    <span className="text-danger">
                      {formik.errors.user_email}
                    </span>
                  )}
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control rounded-pill login-input"
                    id="user_password"
                    name="user_password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_password}
                    autoComplete="off"
                  />
                  <label for="floatingInput" className="login-floating-label">
                    Password
                  </label>
                  {formik.touched.user_password &&
                    formik.errors.user_password && (
                      <span className="text-danger">
                        {formik.errors.user_password}
                      </span>
                    )}
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notify_email"
                    name="notify_email"
                    checked={formik.values.notify_email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="form-check-label"
                    for="notify"
                    htmlFor="notify_email"
                  >
                    Remeber my password
                  </label>
                </div>
                <div className="d-grid mb-4">
                  <button
                    className="btn btn-primary rounded-pill py-2"
                    type="submit"
                  >
                    Login Now
                  </button>
                </div>
              </form>
              <div className="d-grid mb-4">
                <button
                  className="btn btn-primary rounded-pill py-2"
                  type="submit"
                >
                  Signup Now
                </button>
              </div>
              <div className="d-grid mb-4">
                <p className="text-white text-center">
                  <span>
                    <NavLink to="/" className="text-white link-hover-bl">
                      Forgot Password?
                    </NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
