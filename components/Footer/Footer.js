import styles from "./Footer.module.css";

const Footer = () => {
  const { footerLink, codepen } = styles;
  return (
    <footer className={styles.footer}>
      <a
        href="https://codepen.io/kajsaunge/"
        target="_blank"
        rel="noopener noreferrer"
        className={[footerLink, codepen].join(" ")}
      >
        Codepen
      </a>
      <a
        href="https://se.linkedin.com/in/kajsaunge"
        target="_blank"
        rel="noopener noreferrer"
        className={[styles.footerLink, styles.linkedin].join(" ")}
      >
        LinkedIn
      </a>
      <a
        href="https://instagram.com/kajsaunge/"
        target="_blank"
        rel="noopener noreferrer"
        className={[styles.footerLink, styles.insta].join(" ")}
      >
        Insta
      </a>
      <a
        href="http://randomize.kajsaunge.se/"
        target="_blank"
        rel="noopener noreferrer"
        className={[styles.footerLink, styles.random].join(" ")}
      >
        Randomize
      </a>
      <a
        href="http://converter.kajsaunge.se/"
        target="_blank"
        rel="noopener noreferrer"
        className={[styles.footerLink, styles.convert].join(" ")}
      >
        Converter
      </a>
    </footer>
  );
};

export default Footer;
