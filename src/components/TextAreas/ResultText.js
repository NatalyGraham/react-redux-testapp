import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import '../../App.css';

export default function ResultText() {
  //const state = useSelector((state) => state.value);

  return (
    <div>
      <p className = "textArea">
        You chose <span className = "redText"> state </span> accuracyLevel
      </p>
    </div>
  );
}
