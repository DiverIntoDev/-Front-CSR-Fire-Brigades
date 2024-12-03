import styles from "./tableRow.module.css";

export default function TableRow({row, key}) {
  return (
    <tr key={key}>
      {Object.keys(row).map((keyValue, index) => (
        <td key={index} className={styles.row}>{row[keyValue]}</td>
      ))}
    </tr>
  );
}
