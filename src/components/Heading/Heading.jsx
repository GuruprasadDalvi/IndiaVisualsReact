import './Heading.css';

const Heading = ({title}) => {
  return (
    <div className="Heading">
      {title}
    </div>
  )
};

Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
