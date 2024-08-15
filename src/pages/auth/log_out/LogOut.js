import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/api/authService";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await AuthService.logout();
        navigate('/login');
      } catch (e) {
        console.log('Log out failed', e);
      }
    };

    performLogout();
  }, [navigate]);

  return null;
};

export default LogOut;
