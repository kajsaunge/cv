import styles from "./Section.module.css";

const Section = ({
  imageSrc,
  imageAlt,
  title,
  description,
  subDescription,
  children,
  darkTheme,
}) => (
  <>
    {darkTheme && (
      <img className={styles.sectionImage} alt={imageAlt} src={imageSrc} />
    )}
    <section
      className={[
        styles.sectionWrapper,
        darkTheme && styles.sectionWrapperDark,
      ].join(" ")}
    >
      {!darkTheme && (
        <img className={styles.sectionImage} alt={imageAlt} src={imageSrc} />
      )}
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionDescription}>{description}</p>
      <p className={styles.sectionSubDescription}>{subDescription}</p>
      {children}
    </section>
  </>
);

export default Section;
