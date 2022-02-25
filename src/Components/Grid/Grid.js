import React from "react";
import styles from "./Grid.module.css";
import GridItem from "./GridItem";

export default class Grid extends React.Component {
  renderData() {
    return this.props.data.map((item) => (
      <GridItem key={item.id} fact={item} />
    ));
  }

  render() {
    return <section className={styles.grid}>{this.renderData()}</section>;
  }
}
