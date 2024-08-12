import SideBar from "./components/sidebar/sidebar";
import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./config/auth";
import PrivateRoute from "./routes/privateRoutes";
import login from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route path="/login" Component={login} />
          <PrivateRoute path="/">
            <SideBar />
          </PrivateRoute>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
