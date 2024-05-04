import React, { useEffect } from "react";
import "./App.css";
import IndianMap from "./components/IndianMap/IndianMap";
import Heading from "./components/Heading/Heading";
import ButtonColumns from "./components/ButtonColumns/ButtonColumns";
import YearSlider from "./components/YearSlider/YearSlider";
import {
  getLokSabhaMembersColors,
  populatedLoksabhaMap,
  populateCybercrimeMap,
  getCyberCrimeColors,
  getInitialColors,
} from "./Scripts/ColoringFunctions";
import DownloadButton from "./components/DownloadButton/DownloadButton";

function App() {
  const [dataIndex, setDataIndex] = React.useState(0);
  const [currentYear, setCurrentYear] = React.useState(2016);

  const dataList = [
    {
      coloringFunction: getInitialColors,
      title: "india",
      slider: false,
      downloadLink: false,
      params: NaN,
      description:
        "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023, and from the time of its independence in 1947, the world's most populous democracy. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.",
    },
    {
      coloringFunction: getLokSabhaMembersColors,
      title: "lok sabha members",
      slider: false,
      downloadLink: "src/Datasets/loksabha_seats_statewise.csv",
      params: NaN,
      description:
        "The dataset provided encompasses information on Lok Sabha seats across each state for the year 2019. The accompanying map is designed to visually represent this data, utilizing shading to highlight regions where the concentration of Lok Sabha members is highest, indicated by darker areas on the map.",
    },
    {
      coloringFunction: getCyberCrimeColors,
      title: "cyber crimes",
      slider: true,
      downloadLink: "src/Datasets/cyber_crimes.csv",
      min: 2016,
      max: 2023,
      params: currentYear,
      description:
        "This dataset tracks cyber crime incidents reported across India from 2016 to 2023, categorizing them by state/union territory and year. Cyber crimes encompass various illicit activities conducted online, including hacking, fraud, identity theft, and cyberbullying. The data reveals trends in cyber crime prevalence over time, offering insights into regional variations and changes in reporting patterns. Analyzing this dataset can aid in understanding the evolving landscape of cyber threats in India and inform strategies for enhancing digital security measures nationwide.",
    },
  ];
  useEffect(() => {
    populatedLoksabhaMap();
  }, []);
  useEffect(() => {
    populateCybercrimeMap();
  }, []);

  function YearSliderRender() {
    return dataList[dataIndex].slider ? (
      <YearSlider
        min={dataList[dataIndex].min}
        max={dataList[dataIndex].max}
        yearFunction={setCurrentYear}
        year={currentYear}
      />
    ) : (
      <div />
    );
  }

  return (
    <div className="App">
      <div className="col1">
        <Heading title="VISUAL INDIA" />
        <ButtonColumns elements={dataList} counterSetFunction={setDataIndex} />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            bottom: "-10vh",
          }}
        >
          {getDownloadButton()}
          {YearSliderRender()}
        </div>
      </div>
      <div className="col2">
        <IndianMap
          colorFunction={dataList[dataIndex].coloringFunction}
          params={dataList[dataIndex].params}
        />
      </div>
    </div>
  );

  function getDownloadButton() {
    return dataList[dataIndex].downloadLink ? (
      <DownloadButton downloadLink={dataList[dataIndex].downloadLink} />
    ) : (
      <div>
        <span></span>
      </div>
    );
  }
}

export default App;
