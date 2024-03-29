import React, { useEffect } from 'react';
import './App.css';
import IndianMap from './components/IndianMap/IndianMap';
import Heading from "./components/Heading/Heading"
import ButtonColumns from "./components/ButtonColumns/ButtonColumns"
import YearSlider from './components/YearSlider/YearSlider';
import { LokSabhaMembersStateWise, populatedLoksabhaMap, populateCybercrimeMap, cybercrimeColors, initialColoringFunction } from "./Scripts/ColoringFunctions";
import Particles from "react-particles-js"

function App() {

  const [functionCounter, setFunctionCounter] = React.useState(0)
  const [currentYear, setCurrentYear] = React.useState(2016)

  const functionHashMap = [
    { coloringFunction: initialColoringFunction, title: "India",params:(NaN) },
    { coloringFunction: LokSabhaMembersStateWise, title: "Lok Sabha Members",params:(NaN)  },
    { coloringFunction: cybercrimeColors, title: "Cyber Criems", slider: true, min: 2016, max: 2023,params:(currentYear)  }
  ]
  useEffect(() => { populatedLoksabhaMap() }, [])
  useEffect(() => { populateCybercrimeMap() }, [])

  function YerarSliderRender(){
    return functionHashMap[functionCounter].slider ? <YearSlider min={functionHashMap[functionCounter].min} max={functionHashMap[functionCounter].max} yearFunction={setCurrentYear} year={currentYear}/>:<div />
  }

  return (
    <div className="App">
      <Particles
        id="particalBachground"
        params={{
          particles: {
            number: { value: 150, density: { enable: true, value_area: 500 } },
            color: { value: "#591414" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 60, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 56.26362266116361,
              color: "#ff6464",
              opacity: .1048066982851817,
              width: 1.12048066982851816,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 150, duration: 0.1 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />

      <Heading title={functionHashMap[functionCounter].title} />
      <IndianMap
        colorFunction={functionHashMap[functionCounter].coloringFunction}
        params={functionHashMap[functionCounter].params}
      />
      <ButtonColumns
        buttonList={functionHashMap}
        counterSetFunction={setFunctionCounter}
      />

      <div>{YerarSliderRender()}</div>
    </div>
  );
}

export default App;
