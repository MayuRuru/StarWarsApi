import React from "react";
import styles from "./App.module.css";
//components:
import Title from "./Components/Title/Title";
import Background from "./Components/Background/Background";
import Grid from "./Components/Grid/Grid";
import Spaceship from "./Components/Spaceship/Spaceship";
import Starts from "./Components/Spaceship/Stars";
//fakeapi:
import data from "./Service/Fake_Api.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  render() {
    return (
      <div className={styles.App}>
        <Landing />
        {/*  <Title />
        <Background />
        <Grid data={this.state.data} />
        <Spaceship />
        <Starts /> */}
      </div>
    );
  }
}
