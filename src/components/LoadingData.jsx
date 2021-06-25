import React from 'react';
import '../styles/components/LoadingData.css';

const LoadingData = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingData;
