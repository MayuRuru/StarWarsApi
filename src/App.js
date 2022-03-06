import React from "react";
import styles from "./App.module.css";
//components:
import Title from "./Components/Title/Title";
import Background from "./Components/Background/Background";
import Spaceship from "./Components/Spaceship/Spaceship";
import Starts from "./Components/Spaceship/Stars";
import Landing from "./Landing";
//fakeapi: import data from "./Service/Fake_Api.json";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Title />
        <Landing />
        <Background />
        <Spaceship />
        <Starts />
      </div>
    );
  }
}

/* 
constructor(props) {
  super(props);
  this.state = {
    data,
  };
} */
