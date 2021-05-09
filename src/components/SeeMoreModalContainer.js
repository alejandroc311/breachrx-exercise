import React from 'react';
import ReactDOM from 'react-dom';

function SeeMoreModalContainer(props){
  return(
    <div className="modal fade" id={props.countryId} tabindex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <div className="d-flex justify-content-center border border-5 rounded-circle">
                <div>{props.countryId}</div>
              </div>
            </div>
            <div className="modalCountryNameContainer">{props.countryName}</div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                Currency: {props.countryCurrency}
              </div>
              <div className="row">
                Language: {props.countryLanguage}
              </div>
              <div className="row">
                Capital City: {props.countryCapital}
              </div>
              <div className="row">
                Demonym: {props.countryNative}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeeMoreModalContainer;
