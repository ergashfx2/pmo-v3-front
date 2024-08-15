import Login from "../pages/auth/login/login";
import {useRoutes} from "react-router-dom";

const public_routes = [
  {
    path: '/login/',
    element: <Login />
  },
];

const PublicRoutes = () => {
  return useRoutes(public_routes)
}

export default  PublicRoutes