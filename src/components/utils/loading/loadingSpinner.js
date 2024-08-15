import React from 'react';
import { Spinner, Fade } from 'react-bootstrap';

const LoadingSpinner = ({ loading }) => {
  return (
    <Fade in={loading}>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Fade>
  );
};

export default LoadingSpinner;
