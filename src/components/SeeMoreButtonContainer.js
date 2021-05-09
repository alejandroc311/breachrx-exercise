import React from 'react';
import ReactDOM from 'react-dom';

function SeeMoreButtonContainer(props){
  const modalTarget = "#" + props.countryId;
  return(
    <div className="col-lg-4 col-4 col-md-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
      <button className="btn btn-sm btn-dark" role="button" data-bs-toggle="modal" data-bs-target={modalTarget}>See More!</button>
    </div>

  );
}
export default SeeMoreButtonContainer;
