import PropTypes from "prop-types";
import styles from "./button.module.css";
import Icons from "../constants/icons";
import Image from "next/image";

export const ButtonType = {
  emphasized: styles.emphasized,
  standard: styles.standard
}

Button.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string
};

export default function Button({placeholder = "", type = ButtonType.emphasized, disabled = false, icon = null}) {
  const getStyle = () => {
    let activeStyle = `${styles.button} ${type}`;
    if (disabled) {
      return `${activeStyle} ${type === ButtonType.emphasized ? styles.disabledEmphasized : styles.disabledStandard}`;
    }
    return `${activeStyle}`;
  }

  return (
    <button
      className={getStyle()}
      disabled={disabled}
    >
      <span className={styles.spaceBetween}>{placeholder}</span>
      <Image
        src={Icons.ajuda.value}
        alt={Icons.ajuda.alt}
        height={20}
        width={20}
      />
    </button>
  );
}
