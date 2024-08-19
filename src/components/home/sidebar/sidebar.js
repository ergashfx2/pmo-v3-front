import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../../assets/images/AdminLTELogo.png';
import UserService from "../../../services/api/userService";
import LoadingSpinner from "../../utils/loading/loadingSpinner";
import NavItem from "./NavItem/NavItem";
import '../sidebar/sidebar.css'
const SideBar = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getMe = async () => {
            try {
                const user = await UserService.getMe()
                setUser(user)
                setLoading(false)
            } catch (e) {
                console.log('failed', e)
            }
        }
        getMe();
    }, []);
    if (loading) {
        return <LoadingSpinner/>
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link text-decoration-none">
                <img
                    src={Logo}
                    alt="Logo"
                    className="brand-image img-circle elevation-3"
                    style={{opacity: 0.8}}
                />
                <span className="brand-text font-weight-light">PMO system</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel pb-3 d-flex">
                    <div className="image">
                        <img src={'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'} className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <Link to="my-profile" style={{fontSize: '18px'}} className="d-block">
                            @
                            {user.username || 'Guest'}
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
