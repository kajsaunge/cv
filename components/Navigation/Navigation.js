import Image from "next/image.js";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav id="main-nav" className={styles.navigation}>
        <a className={styles.homeLink} href="index.html#body">
          <Image
            src="/kajsa-unge-logo.svg"
            alt="Kajsa Unge Logo"
            width={30}
            height={30}
            className={styles.homeLinkLogo}
          />
        </a>
        <a className={styles.navigationLink} href="index.html#about">
          About
        </a>
        <a className={styles.navigationLink} href="index.html#project">
          Work
        </a>
        <a className={styles.navigationLink} href="index.html#cv">
          Cv
        </a>
        <a className={styles.navigationLink} href="index.html#contact">
          Contact
        </a>
      </nav>
      <header className={styles.siteHeader}></header>
    </div>
  );
};

export default Navigation;
