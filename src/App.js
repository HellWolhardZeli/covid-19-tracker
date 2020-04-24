import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Cards />
        <CountryPicker />
        <h1>App</h1>
      </div>
    );
  }
}
