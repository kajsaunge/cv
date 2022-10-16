import Section from "../Section/Section";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Section
        title="Contact"
        description="Say hello"
        imageAlt="Illustration of an old shool phone"
        imageSrc="/contact-img.png"
      >
        <a href="tel:+46703987208" className={styles.contactLinks}>
          +46 (0)70 3987 208
        </a>
        <a
          href="mailto:hej@kajsaunge.se?subject=Mail from Kajsa Unges site"
          className={styles.contactLinks}
        >
          hej@kajsaunge.se
        </a>
      </Section>
    </>
  );
};

export default Contact;
