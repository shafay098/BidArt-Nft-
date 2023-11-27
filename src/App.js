import React, { useState, useEffect } from "react";
import "./common/main.css";
import "./common/responsive.css";
import MainRoutes from "./routes";
const App = () => {
  const [bool, setbool] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setbool(false);
    }, 800);
  }, [bool]);

  return (
    <>
      {bool ? (
        <div className="cs-preloader cs-center">
          <div className="cs-preloader_in"></div>
          <h2>Welcome To The Kingdom of Rare Ditital Assets.</h2>
        </div>
      ) : (
        <MainRoutes />
      )}
    </>
  );
};

export default App;
