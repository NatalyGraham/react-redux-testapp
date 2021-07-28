import * as React from "react";
import SelectDropBox from "./components/Buttons/SelectDropBox.js";
import ResultText from "./components/TextAreas/ResultText.js";

import "./App.css";
import RowRadioButtonsGroup from "./components/Buttons/RowRadioButtonsGroup.js";

const App = () => {
  const [accuracyLevel, setAccLvl] = React.useState("1");

  const setAccuracy = (code) => {
    setAccLvl(code)
    console.log(`Hello ${code}`);
  };

  return (
    <div className="centred" onChange={(event) => console.log(event)}>
      <SelectDropBox
        accuracy={accuracyLevel}
        boxName="Accuracy"
        item1="Normal"
        item2="High"
        setAccuracy={setAccuracy}
      />
      <ResultText type="accuracy" />
      <RowRadioButtonsGroup accuracy={accuracyLevel} />
      <ResultText type="temperature" />
    </div>
  );
};

export default App;
