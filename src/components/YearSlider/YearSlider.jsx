/* eslint-disable react/prop-types */
import './YearSlider.css';

const YearSlider=({year,min,max, yearFunction}) => {

    return (
      <div className="YearSlider">
        <div className='currentYear'>{year}</div>
        <input id="yearSliser" className='track' type="range" value={year} min={min} max={max} onInput={(event) => yearFunction(event.target.value)} />
      </div>)
}

YearSlider.propTypes = {};

YearSlider.defaultProps = {};

export default YearSlider;
