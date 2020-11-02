import React from "react";
import Dado from "./Dado";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      numeroSeleccionado: 4, //Número a apostar
    };
  }
  render() {
    return (
      <div className="margin">
        Número seleccionado: {this.state.numeroSeleccionado} <hr> </hr>{" "}
        <Dado numero={this.state.numeroSeleccionado} />{" "}
      </div>
    );
  }
}

export default App;
