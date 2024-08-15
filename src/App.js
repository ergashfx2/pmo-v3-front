import "./styles/App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import PublicRoutes from "./routes/public";
import PrivateRoutes from "./routes/private";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <div className={'row'}>
            <PublicRoutes />
            <PrivateRoutes />
          </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
