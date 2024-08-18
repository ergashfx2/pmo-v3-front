import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from "../../services/api/userService";
import LoadingSpinner from "../utils/loading/loadingSpinner";
import './Profile.css';
import DetailsItem from "./DetailsItem/DetailsItem";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await UserService.getMyProfile();
                setUser(profile);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <div className="alert alert-warning text-center">Profile not found</div>;
    }

    return (
        <div className="profile-container container my-5">
            <div className="profile-card shadow-lg p-4">
                <div className="profile-header text-center mb-4">
                    <img className="profile-image rounded-circle" src={'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'} alt="User" />
                    <h2 className="mt-3">{user.first_name}</h2>
                    <p className="text-muted">{user.position}</p>
                </div>
                <div className="profile-details">
                    <DetailsItem icon="fa-phone" title="Mobil raqam" value={user.phone} />
                    <DetailsItem icon="fa-user" title="Ro'li" value={user.role} />
                    <DetailsItem icon="fa-envelope" title="Lavozim" value={user.position} />
                    <DetailsItem icon="fa-building" title="Blog" value={user.blog} />
                    <DetailsItem icon="fa-sitemap" title="Departament" value={user.department} />
                </div>
                <Link
                    to="/my-profile/update"
                    state={{ user: user }}
                    className="btn btn-primary btn-block mt-4"
                >
                    Yangilash
                </Link>
            </div>
        </div>
    );
};


export default Profile;
