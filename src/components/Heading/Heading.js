import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = (props) => {
  return (
    <div className="Heading">
      {props.title}
    </div>
  )
};

Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
