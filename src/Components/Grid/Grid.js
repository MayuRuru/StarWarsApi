import React from "react";
import styles from "./Grid.module.css";
import GridItem from "./GridItem";

export default function Grid({ data }) {
  return (
    <section className={styles.grid}>
      {data.map((people, i) => {
        return <GridItem key={i} item={people} />;
      })}
    </section>
  );
}

/* 
renderData() {
  return this.props.data.map((item) => (
    <GridItem key={item.id} fact={item} />
  ));
}

render() {
  return <section className={styles.grid}>{this.renderData()}</section>;
} */
