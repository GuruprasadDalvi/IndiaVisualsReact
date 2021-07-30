import React from 'react';
import PropTypes from 'prop-types';
import './ButtonColumns.css';
import DataButtons from '../DataButtons/DataButtons';
import { index } from 'd3-array';

const ButtonColumns = (props) => {
  return (
    <div className="ButtonColumns">{
      props.buttonList.map((element,index) => {
        return <DataButtons title ={element.title} index = {index} counterFunction={props.counterSetFunction}/>
})}
    </div>
  )
};

ButtonColumns.propTypes = {};

ButtonColumns.defaultProps = {};

export default ButtonColumns;
