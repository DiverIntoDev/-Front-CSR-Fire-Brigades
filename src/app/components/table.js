import TableRow from "./tableRow";
import styles from "./table.module.css"

export default function Table({rows, columns}) {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className={styles.column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} />
        ))}
      </tbody>
    </table>
  );
}
