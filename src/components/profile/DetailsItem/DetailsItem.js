import React from "react";

const DetailsItem = ({ icon, title, value }) => (
    <div className="d-flex align-items-center mb-3">
        <i className={`fa-solid ${icon} text-primary mr-3`} style={{ fontSize: '1.2rem' }}></i>
        <div>
            <strong>{title}</strong>
            <p className="text-muted mb-0">{value || 'Kiritilmagan'}</p>
        </div>
    </div>
);

export default  DetailsItem