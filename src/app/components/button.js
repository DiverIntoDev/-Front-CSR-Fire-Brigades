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

export default function Button({placeholder = "", type = ButtonType.emphasized, disabled = false, firstImage = null, secondImage = null}) {
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
      {firstImage &&
        <Image
          src={firstImage.value}
          alt={firstImage.alt}
          height={20}
          width={20}
        />
      }
      <span className={styles.spaceBetween}>{placeholder}</span>
      {secondImage &&
        <Image
          src={secondImage.value}
          alt={secondImage.alt}
          height={20}
          width={20}
        />
      }
    </button>
  );
}
