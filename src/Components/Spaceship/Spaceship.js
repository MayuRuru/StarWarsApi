import React from "react";
import styles from "./Spaceship.module.css";

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <img src="/falcon.png" alt="falcon" className={styles.img} />
      </div>
    );
  }
}
