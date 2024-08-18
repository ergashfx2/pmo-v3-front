import React from 'react';
import Profile from "../../components/profile/Profile";

const MyProfile = () => {
    return (
        <div className={'row'}>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                    <Profile/>
            </div>
            <div className="col-lg-3"></div>
        </div>
)
    ;
};

export default MyProfile;