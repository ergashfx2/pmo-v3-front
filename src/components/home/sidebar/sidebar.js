import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/AdminLTELogo.png';

// NavItem Component
const NavItem = ({ to, iconClass, label }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link">
      <i className={iconClass}></i>
      <p>{label}</p>
    </Link>
  </li>
);
const SideBar = ({ user, isAdmin }) => {
  return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link text-decoration-none">
          <img
            src={Logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">PMO system</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel pb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <Link to="#" style={{ fontSize: '18px' }} className="d-block">
                {user?.name || 'Guest'}
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <nav>
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <NavItem
                to="users/"
                iconClass="fa-solid fa-user-group"
                label="Foydalanuvchilar"
              />
              <NavItem
                to="#"
                iconClass="fas fa-folder-open"
                label="Barcha loyihalar"
              />
              <NavItem
                to="#"
                iconClass="fas fa-folder"
                label="Mening loyihalarim"
              />
              <NavItem
                to="#"
                iconClass="fa-solid fa-user-large"
                label="Loyiha egasi"
              />
              <NavItem
                to="#"
                iconClass="fas fa-check-circle"
                label="Kvalifikatsiya"
              />
              <NavItem
                to="#"
                iconClass="fa-solid fa-coins"
                label="Xarajatlar"
              />
              <NavItem
                to="logout/"
                iconClass="fas fa-sign-out-alt"
                label="Chiqish"
              />
            </ul>
          </nav>
        </div>
      </aside>

  );
};

export default SideBar;
