/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { isLoggedIn } from "../utils/authService";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const userExist = isLoggedIn();

  const location = useLocation();
  const navigate = useNavigate();

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    if (!userExist) {
      navigate("/login", { state: { from: location } });
    }
  }, [userExist, location, navigate, isInitialLoad]);

  if (isInitialLoad) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
