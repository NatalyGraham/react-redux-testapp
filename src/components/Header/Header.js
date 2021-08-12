import React, { Component } from "react";

import IconLabelButtons from "../Buttons/Button";
import LanguageSelector from "./LanguageSelector";
import MeasuringSystemSelector from "./MeasuringSystemSelector";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header_style sticky">
        <IconLabelButtons />
        <div className="header_style">
          <MeasuringSystemSelector />
          <LanguageSelector />
        </div>
      </div>
    );
  }
}
