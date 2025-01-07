import Icons from "../../constants/icons";
import Image from "next/image";
import styles from "./filterButton.module.css";

export default function FilterButton() {
  return (
    <button className={styles.button}>
        <div>
            Filtrar
        </div>
        <div>
        <Image
            src={Icons.filtrar.value}
            alt={Icons.filtrar.alt}
            height={32}
            width={24}
        />
        </div>
    </button>
  );
}