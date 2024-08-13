import React from "react";
import Logo from "../../assets/images/AdminLTELogo.png";

const NavItem = ({ href, iconClass, label }) => (
  <li className="nav-item">
    <a href={href} className="nav-link">
      <i className={iconClass}></i>
      <p>{label}</p>
    </a>
  </li>
);

const SideBar = ({ user, isAdmin }) => {
  return (
    <div>
      <nav
        className="main-header navbar navbar-expand navbar-white navbar-light"
        style={{ width: "100dvw" }}
      >
        <div className="row" style={{ width: "100%" }}>
          <div className="navbar-nav col-12">
            <li className="nav-item mt-1 text-start w-75">
              <a
                className="nav-link mx-0 d-lg-none"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <img
            src={Logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">PMO system</span>
        </a>
        <div className="sidebar">
          <div className="user-panel pb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <a style={{ fontSize: "18px" }} href="#" className="d-block">
                {user?.name || "Guest"}
              </a>
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
                href="#"
                iconClass="fa-solid fa-user-group"
                label="Foydalanuvchilar"
              />
              <NavItem
                href="#"
                iconClass="fas fa-folder-open"
                label="Barcha loyihalar"
              />
              <NavItem
                href="#"
                iconClass="fas fa-folder"
                label="Mening loyihalarim"
              />
              <NavItem
                href="#"
                iconClass="fa-solid fa-user-large"
                label="Loyiha egasi"
              />
              <NavItem
                href="#"
                iconClass="fas fa-check-circle"
                label="Kvalifikatsiya"
              />
              <NavItem
                href="#"
                iconClass="fa-solid fa-coins"
                label="Xarajatlar"
              />
              <NavItem
                href="#"
                iconClass="fas fa-sign-out-alt"
                label="Chiqish"
              />
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
