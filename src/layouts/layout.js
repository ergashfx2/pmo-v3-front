import React from 'react';
import SideBar from "../components/home/sidebar/sidebar";
import './layout.css'
const Layout = ({ children }) => {
  return (
      <div>
              <SideBar/>
          <div className={'content-wrapper'}>{children}</div>
      </div>
  );
};

export default Layout;