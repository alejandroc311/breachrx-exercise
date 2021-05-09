import React from 'react';
import ReactDOM from 'react-dom';

function AddCountryButton(props){
  return(
    <button className="btn btn-sm btn-dark mx-1" role="button" data-bs-toggle="modal" data-bs-target="#addCountryModal">Add Country</button>
  );
}
export default AddCountryButton;
