import React from "react";
import styles from "./Starts.module.css";

export default class Starts extends React.Component {
  render() {
    return (
      <div className={styles.starts}>
        <video className={styles.video} autoPlay loop src="/stars.mp4" />
      </div>
    );
  }
}
