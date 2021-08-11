import React, { Component } from "react";

import BackButton from "../Buttons/Button"
import LanguageSelector from "./LanguageSelector";

export default class Header extends Component {
  render() {
      return(
          <div>

          <BackButton />
          <LanguageSelector />
          </div>
      );
  }
}
