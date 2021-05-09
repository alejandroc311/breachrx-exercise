import React from 'react';
import ReactDOM from 'react-dom';

function CountryNameContainer(props){
  return(
    <div className="col-lg-4 col-4 col-md-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
      <div className="d-flex justify-content-center">{props.countryName}</div>
    </div>
  );
}
export default CountryNameContainer;
