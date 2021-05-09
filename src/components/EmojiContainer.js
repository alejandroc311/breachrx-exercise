import React from 'react';
import ReactDOM from 'react-dom';

function EmojiContainer(props){

  return (
    <div className="d-flex justify-content-center col-lg-4 col-4 col-md-4 col-xl-4 col-xxl-4">
      <div className="d-flex justify-content-center border border-5 rounded-circle">
        <div>{props.countryEmoji}</div>
      </div>
    </div>
  );
}
export default EmojiContainer;
