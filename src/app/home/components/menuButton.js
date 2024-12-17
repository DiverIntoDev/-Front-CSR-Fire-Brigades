import Icons from "../../constants/icons";
import Image from "next/image";
import styles from "./menuButton.module.css";

export default function MenuButton() {
  return (
    <div className={styles.borderRadius}>
      <Image
        src={Icons.menu.value}
        alt={Icons.menu.alt}
        height={20}
        width={20}
      />
    </div>
  );
}