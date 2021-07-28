import * as React from "react";

import "../../App.css";

const ResultText = (props) => {
  const typeOfDate = [
    {
      type: "accuracy",
      text: "accuracy level",
    },
    {
      type: "temperature",
      text: "temperature level",
    },
  ];

  const textByType = (type) => {
    switch (type) {
      case "accuracy":
        return "accuracy level";
      case "temperature":
        return "temperature";
    }
  };

  return (
    <div>
      <p className="textArea">
        You chose <span className="redText"> state </span>
        {textByType(props.type)}
      </p>
    </div>
  );
};

export default ResultText;
