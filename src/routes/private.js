import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from "../layouts/layout";
import LogOut from "../pages/auth/log_out/LogOut";
import Home from "../pages/home/home";
import MyProfile from "../pages/profile/MyProfile";
import UpdateProfile from "../pages/profile/UpdateProfile";
import UsersPage from "../pages/admin/users/UsersPage";

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

const PrivateRoutes = () => {
  const routes = useRoutes([
    { path: '', element: <Home/>},
    { path: '/my-profile', element: <MyProfile/>},
    { path: '/my-profile/update', element: <UpdateProfile/>},
    { path: 'users/', element: <UsersPage/>},
    { path: 'logout', element: <LogOut /> },
  ]);

  return (
    <ProtectedRoute>
      <Layout>{routes}</Layout>
    </ProtectedRoute>
  );
};

export default PrivateRoutes;
