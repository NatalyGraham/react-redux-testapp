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

  const typeOfStatus = [
    {
      type: "NormalLvl",
      text: " normal ",
    },
    {
      type: "HigiLvl",
      text: " high ",
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

  const textByStatus = (type) => {
    switch (type) {
      case "NormalLvl":
        return " normal ";
      case "HighLvl":
        return " high ";
      case "AnyLvl":
        return " any ";
    }
  };

  return (
    <div>
      <p className="textArea">
        You chose{" "}
        <span className="redText">{textByStatus(props.accuracy)}</span>
        {textByType(props.type)}
      </p>
    </div>
  );
};

export default ResultText;
