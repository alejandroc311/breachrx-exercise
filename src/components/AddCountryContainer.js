import React from 'react';
import ReactDOM from 'react-dom';
import AddCountryButton from "./AddCountryButton.js"
import AddCountryModal from "./AddCountryModal.js"
function AddCountryContainer(props){
  return(
    <div className="container" id="addCountryContainer">
      <div className="row d-flex justify-content-center">
        <div className="d-flex justify-content-center col-lg-8 col-md-8 col-sm-8 col-8">
          <div>Create a Country!</div>
          <AddCountryButton/>
          <AddCountryModal/>
        </div>
      </div>
    </div>
  );
}

export default AddCountryContainer;
