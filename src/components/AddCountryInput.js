import React from 'react';
import ReactDOM from 'react-dom';

function AddCountryInput(props){
  var inputType;
  if(props.typeOfInput == "Country Name"){
    inputType = "countryName";
  }
  if(props.typeOfInput == "Currency"){
    inputType = "countryCurrency";
  }
  if(props.typeOfInput == "Language"){
    inputType = "countryLanguage";
  }
  if(props.typeOfInput == "Capital"){
    inputType = "countryCapital";
  }
  function handleUserInput(event){
    props.onInputChange(event.target.name, event.target.value);
  }
  return(
    <div class="mb-3">
      <label for={inputType} className="form-label">{props.typeOfInput}</label>
      <input name={props.typeOfInput} onChange={handleUserInput} className="form-control" id={inputType}></input>
    </div>
  );
}
export default AddCountryInput;
