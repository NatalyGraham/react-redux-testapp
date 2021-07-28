import * as React from "react";
import SelectDropBox from "./components/Buttons/SelectDropBox.js";

import './App.css';


const AccuracyBtn = SelectDropBox("Acc")

function App() {
  return (
    <div>
      <AccuracyBtn />
    </div>
  );
}

export default App;
