import styles from "./header.module.css";
import Icons from "../constants/icons";
import MenuButton from "../home/components/menuButton";
import Image from "next/image";
import HelpButton from "../home/components/helpButton";
import Link from "next/link";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.menuLeft}>
          <MenuButton />
        </div>
        <div className={styles.menuCenter}>
          <Link href="/home">
            <Image
            className={styles.logo}
              src={Icons.logo.value}
              alt={"Logo"}
              height={100}
              width={200} />
          </Link>
        </div>
        <Link href="/FAQPage">
          <div className={styles.menuRight}>
            <HelpButton />
          </div>
        </Link>
      </header>
    );
  }