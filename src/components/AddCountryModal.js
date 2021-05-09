import React from 'react';
import ReactDOM from 'react-dom';
import AddCountryForm from "./AddCountryForm.js";

function AddCountryModal(){
  return(
    <div className="modal fade" id="addCountryModal" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Create your own Country!</div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <AddCountryForm/>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-dark" form="createCountryForm">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCountryModal;
