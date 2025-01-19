import styles from "./tableRow.module.css";

export default function TableRow({row, key}) {
  return (
    <tr key={key}>
      {Object.values(row).map((value, index) => (
        <td key={index} className={styles.row}>{value}</td>
      ))}
    </tr>
  );
}
