import React from 'react';
import './DataButtons.css';

const DataButtons = (props) => {
  function onClickFunction(){
    if(props.counterFunction){
      props.counterFunction.call(this,(props.index))
    }
  }
  
  return(
  <div className="DataButtons">
    <button  className= "ButtonStyle"onClick = {onClickFunction}>
    {props.title}
    </button>
  </div>
)};

DataButtons.propTypes = {};

DataButtons.defaultProps = {};

export default DataButtons;
