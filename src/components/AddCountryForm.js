import React from 'react';
import ReactDOM from 'react-dom';
import AddCountryInput from "./AddCountryInput.js";
function AddCountryForm(props){
  const [countryName, setCountryName] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [capital, setCapital] = React.useState("");
  function handleInputChange(name, value){
    if(name == "Country Name"){
      setCountryName(value);
    }
    if(name == "Currency"){
      setCurrency(value);
    }
    if(name == "Language"){
      setLanguage(value)
    }
    if(name == "Capital"){
      setCapital(value)
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log("Here is the following info...\nName of the Country: "+countryName+"\nCurrency of the Country: "+currency+
    "\nLanguage of the Country: "+language+"\nCapital of the Country: "+capital);
    document.getElementById("createCountryForm").reset();
  }
  const inputTypes = ["Country Name", "Currency", "Language", "Capital"];
  const inputType = inputTypes.map((input) =>
    <div>
    <AddCountryInput typeOfInput={input} onInputChange={handleInputChange}/>
    </div>
  );
  return(
    <form id="createCountryForm" onSubmit={e => handleSubmit(e)}>
      {inputType}
    </form>
  );
}
export default AddCountryForm;
