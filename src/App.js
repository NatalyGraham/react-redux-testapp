import * as React from "react";
import SelectDropBox from "./components/Buttons/SelectDropBox.js";
import ResultText from "./components/TextAreas/ResultText.js";

import "./App.css";

function App() {
  return (
    <div className="centred">
      <SelectDropBox />
      <ResultText />
    </div>
  );
}

export default App;
