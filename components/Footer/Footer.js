import styles from './Footer.module.css';
import content from '../../pages/api/content.json';

const Footer = () => {
  const { footer, footerLink, art, codep, linked, insta, random, convert } =
    styles;
  const { konst, codepen, linkedin, instagram, randomize, converter } =
    content.footer;
  return (
    <footer className={footer}>
      <a
        href={konst.url}
        target='_blank'
        rel='noopener noreferrer'
        className={[footerLink, art].join(' ')}
      >
        {konst.title}
      </a>
      <a
        href={codepen.url}
        target='_blank'
        rel='noopener noreferrer'
        className={[footerLink, codep].join(' ')}
      >
        {codepen.title}
      </a>
      <a
        href={linkedin.url}
        target='_blank'
        rel='noopener noreferrer'
        className={[footerLink, linked].join(' ')}
      >
        {linkedin.title}
      </a>
      <a
        href={instagram.url}
        target='_blank'
        rel='noopener noreferrer'
        className={[footerLink, insta].join(' ')}
      >
        {instagram.title}
      </a>
      {/* <a
        href={randomize.url}
        target="_blank"
        rel="noopener noreferrer"
        className={[footerLink, random].join(" ")}
      >
        {randomize.title}
      </a> */}
      <a
        href={converter.url}
        target='_blank'
        rel='noopener noreferrer'
        className={[footerLink, convert].join(' ')}
      >
        {converter.title}
      </a>
    </footer>
  );
};

export default Footer;
