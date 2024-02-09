import React from 'react';
import PropTypes from 'prop-types';
import './YearSlider.css';

const YearSlider=(props) => {

    return (
      <div className="YearSlider">
        <div className='currentYear'>।। &nbsp;&nbsp;&nbsp;Current Year&nbsp;&nbsp;&nbsp; ।।</div>
        <div className='currentYear'>।। &nbsp;&nbsp;{props.year}&nbsp;&nbsp; ।।</div>
        <input id="yearSliser" className='track' type="range" value={props.year} min={props.min} max={props.max} onInput={(event) => props.yearFunction(event.target.value)} />
      </div>)
}

YearSlider.propTypes = {};

YearSlider.defaultProps = {};

export default YearSlider;
