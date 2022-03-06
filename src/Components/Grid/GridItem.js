import React from "react";
import styles from "./GridItem.module.css";

export default function GridItem({ item }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{item.name}</h2>
      <article className={styles.data}>height:{item.height}</article>
      <article className={styles.data}>mass:{item.mass}</article>
      <article className={styles.data}>hair color:{item.hair_color}</article>
      <article className={styles.data}>birth year:{item.birth_year}</article>
    </div>
  );
}

/* 
<div className={styles.card}>
      <h2 className={styles.title}>{props.fact.title}</h2>
      <article className={styles.data}>{props.fact.fact}</article>
    </div> */
