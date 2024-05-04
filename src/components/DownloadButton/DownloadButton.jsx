/* eslint-disable react/prop-types */
import "./DownloadButton.css";


const DownloadButton = ({downloadLink}) => {
  return <a className="download" href={downloadLink} download>
        download dataset
        <span className="material-symbols-outlined">
arrow_downward
</span>
      </a>
  ;
};

DownloadButton.propTypes = {};

DownloadButton.defaultProps = {};

export default DownloadButton;
