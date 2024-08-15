import React from 'react';
import './smallBox.css'
import {Link} from "react-router-dom";
const SmallBox = ({ color, title, value,link }) => {
    return (
            <div className={`small-box ${color}`}>
                <div className="inner">
                    <h3>{value}<sup></sup></h3>

                    <p>{title}</p>
                </div>
                <div className="icon">
                    <i className="ion ion-stats-bars"></i>
                </div>
                <Link to={link} className={'small-box-footer'}><i className="fas fa-arrow-circle-right mx-2"></i>Batafsil</Link>
            </div>
    );
};

export default SmallBox;