import React from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_password: "",
      notify_email: false,
      notify_news_letter: false,
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .label("Full Name")
        .required()
        .test(
          "is-full-name",
          "Please enter both your first and last name",
          function (value) {
            const nameArr = value.split(" ");
            return nameArr.length >= 2;
          }
        ),
      user_email: Yup.string().email().required("Email is required"),
      user_password: Yup.string()
        .required("No password provided")
        .min(8, "Password is too short"),
    }),
    onSubmit: function (values, { resetForm }) {
      alert(
        `You are registered! Name: ${values.user_name}. Email: ${values.user_email}. ${values.user_password} ${values.notify_email} ${values.notify_news_letter}`
      );
      resetForm();
    },
  });
  return (
    <div
      className="container-fluid gradient-top-border"
      id="signup-form-section"
    >
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="signup-form py-4">
            <div className="signup-form-wrapper">
              <div className="singup-form-title text-center">
                <h2>Create Account</h2>
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
                    type="text"
                    className="form-control rounded-pill signup-input"
                    id="user_name"
                    name="user_name"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                    autoComplete="off"
                  />
                  <label for="floatingInput" className="signup-floating-label">
                    Username
                  </label>
                  {formik.touched.user_name && formik.errors.user_name && (
                    <span className="text-danger">
                      {formik.errors.user_name}
                    </span>
                  )}
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control rounded-pill signup-input"
                    id="user_email"
                    name="user_email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                    autoComplete="off"
                  />
                  <label for="floatingInput" className="signup-floating-label">
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
                    className="form-control rounded-pill signup-input"
                    id="user_password"
                    name="user_password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_password}
                    autoComplete="off"
                  />
                  <label for="floatingInput" className="signup-floating-label">
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
                    I'm attracted in receiving marketing emails for updates on
                    upcoming promotions, events and new features
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id=" notify_news_letter"
                    name="notify_news_letter"
                    checked={formik.values.notify_news_letter}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="form-check-label"
                    for="notify"
                    htmlFor="notify_news_letter"
                  >
                    I'm attracted in receiving marketing emails for updates on
                    upcoming promotions, events and new features
                  </label>
                </div>
                <div className="d-grid mb-4">
                  <button
                    className="btn btn-primary rounded-pill py-2"
                    type="submit"
                  >
                    Registar Now
                  </button>
                </div>
              </form>
              <div className="d-grid mb-4">
                <p className="text-white text-center">
                  <span>Have an account? </span>
                  <button className="bg-transparent border-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handelLogin();
                    }}
                  >
                    <NavLink to="/login">Login</NavLink>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
