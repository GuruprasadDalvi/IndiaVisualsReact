import React from 'react';
import './DataButtons.css';

const DataButtons = (props) => {
  function onClickFunction(){
    if(props.counterFunction){
      props.counterFunction.call(this,(props.index))
    }
  }
  
  return(
    <option  className= "ButtonStyle" onClick = {onClickFunction}>
    {props.title}
    </option>
)};

DataButtons.propTypes = {};

DataButtons.defaultProps = {};

export default DataButtons;
