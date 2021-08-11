import React, { Component } from "react";

import Header from "./components/Header/Header"
import "./App.css";

export default class App extends Component {
  render() {
    //const {accuracyLevel, setAccLvl} = this.props;

    return (
      <div className="component_wrapper">
        <Header />
      </div>
    );
  }
}
