/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ButtonColumns.css";

const ButtonColumns = ({ elements, counterSetFunction }) => {
  const [selected, setSelected] = useState(elements[0])
  return (
    <div className="parent">
      <select className="ButtonColumns" onChange={(e)=>{counterSetFunction(e.target.value), setSelected(elements[e.target.value])}} >
        {elements.map((element, index) => {
          return (
            <option className="ButtonStyle" key={element} value={index}>
              {element.title}
            </option>
          );
        })}
      </select>
      <p>{selected.description.padEnd(655," ")}</p>
    </div>
  );
};

ButtonColumns.propTypes = {};

ButtonColumns.defaultProps = {};

export default ButtonColumns;
