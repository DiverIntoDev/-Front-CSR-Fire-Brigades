import styles from "./select.module.css"
import Label from "./label";

export default function Select({label, disabled, placeholder, items = []}) {
  const getStyle = () => {
    if (disabled) {
      return styles.disabled;
    }
    return styles.select;
  };

  return (
    <>
      {label &&
        <div className={styles.labelpadding}>
          <Label text={label}/>
        </div>
      }
      <div>
        <select
          className={getStyle()}
          placeholder={placeholder}
          disabled={disabled}
        >
          {items.map((item) => {
            return (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
