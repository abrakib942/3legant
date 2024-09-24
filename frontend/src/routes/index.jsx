import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Checkout from "../components/Checkout";
import ViewCart from "../components/ViewCart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../components/NotFound";
import PrivateRoute from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
      },
      {
        path: "/viewCart",
        element: <ViewCart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
