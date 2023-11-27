import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import SignUpPage from "../pages/signup";
import LogInPage from "../pages/login";
import CollectionDetail from "../pages/CollectionDetail";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/CollectionDetail' element={<CollectionDetail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
