'use client'

import styles from "./label.module.css";

export default function Label({text}) {
  return (
    <span
      className={styles.label}
    >
      {text}
    </span>
  );
}
