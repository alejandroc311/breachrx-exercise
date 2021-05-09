import React from 'react';
import ReactDOM from 'react-dom';
import EmojiContainer from "./EmojiContainer.js";
import CountryNameContainer from "./CountryNameContainer.js";
import SeeMoreButtonContainer from "./SeeMoreButtonContainer.js";
import SeeMoreModalContainer from "./SeeMoreModalContainer.js";

function ListViewItem(props){

  return (
    <div className="card border rounded-4 border-5">
      <div className="row d-flex align-items-center">
        <EmojiContainer countryEmoji={props.countryEmoji} />
        <CountryNameContainer countryName={props.countryName}/>
        <SeeMoreButtonContainer countryId={props.countryId}/>
        <SeeMoreModalContainer countryId={props.countryId} countryName={props.countryName} countryCurrency={props.countryCurrency}
        countryCapital={props.countryCapital} countryNative={props.countryNative} countryLanguage={props.countryLanguage}
        />
      </div>
    </div>
  );

}
export default ListViewItem;
