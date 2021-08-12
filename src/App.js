import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "./components/Header/Header";
import Page01 from "./components/PageContent/Page01";
import "./App.css";

export default class App extends Component {
  render() {
    //const {accuracyLevel, setAccLvl} = this.props;
    const theme = createTheme({
      palette: {
        primary: {
          main: "#FECC00",
        },
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <div className="component_wrapper">          
            <Header />          
          <div className="page_content">
            <Page01 className="centred" />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
