import Image from "next/image.js";
import styles from "./Navigation.module.css";
import content from "../../pages/api/content.json";

const Navigation = () => {
  const { navigation, homeLink, homeLinkLogo, navigationLink, siteHeader } =
    styles;
  const { id, homeUrl, imgSrc, imgAlt, about, cases, cv, contact } =
    content.navigation;
  return (
    <div>
      <nav id={id} className={navigation}>
        <a className={homeLink} href={homeUrl}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={30}
            height={30}
            className={homeLinkLogo}
          />
        </a>
        <a className={navigationLink} href="index.html#about">
          {about}
        </a>
        <a className={navigationLink} href="index.html#project">
          {cases}
        </a>
        <a className={navigationLink} href="index.html#cv">
          {cv}
        </a>
        <a className={navigationLink} href="index.html#contact">
          {contact}
        </a>
      </nav>
      <header className={siteHeader}></header>
    </div>
  );
};

export default Navigation;
