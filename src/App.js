import * as React from "react";
import SelectDropBox from "./components/Buttons/SelectDropBox.js";
import ResultText from "./components/TextAreas/ResultText.js";

import "./App.css";
import RowRadioButtonsGroup from "./components/Buttons/RowRadioButtonsGroup.js";

const App = () => {
 const [accuracyLevel, setAccLvl] = React.useState(""); 
  console.log(accuracyLevel);

  return (
    <div className="centred" >
      <SelectDropBox
        accuracy={accuracyLevel}
        boxName="Accuracy"
        item={["Normal","High","Any"]}
        setAccuracy={setAccLvl}
      />
      <ResultText type="accuracy" accuracy={accuracyLevel}/>
      <RowRadioButtonsGroup accuracy={accuracyLevel} />
      <ResultText type="temperature" />
    </div>
  );
};

export default App;
