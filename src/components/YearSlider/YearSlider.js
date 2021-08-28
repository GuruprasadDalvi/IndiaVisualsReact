import React from 'react';
import PropTypes from 'prop-types';
import './YearSlider.css';

const YearSlider=(props) => {

    return (
      <div className="YearSlider">
        <div className='currentYear'>{props.year}</div>
        <input id="yearSliser" type="range" value={props.year} min={props.min} max={props.max} onInput={(event) => props.yearFunction(event.target.value)} />
      </div>)
}

YearSlider.propTypes = {};

YearSlider.defaultProps = {};

export default YearSlider;
