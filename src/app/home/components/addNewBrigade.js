import Icons from "../../constants/icons";
import Image from "next/image";
import styles from "./viewBrigadesButton.module.css";
import Link from "next/link";

export default function AddNewBrigade() {
  return (
    <Link href="/contactPage">
        <div className={styles.button}>
            <div className={styles.image1}>
                <Image
                    src={Icons.maisbranco.value}
                    alt={Icons.maisbranco.alt}
                    height={23}
                    width={23}
                    />
            </div>
            <div className={styles.content}>
                Cadastrar Nova Brigada
            </div>
            <div className={styles.image2}>
            <Image
                    src={Icons.prosseguirbranco.value}
                    alt={Icons.prosseguirbranco.alt}
                    height={23}
                    width={23}
                    />
            </div>
        </div>
    </Link>
  );
}