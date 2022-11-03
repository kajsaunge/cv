import Section from "../Section/Section";
import styles from "./Contact.module.css";
import content from "../../pages/api/content.json";

const Contact = () => {
  const { contactLinks } = styles;
  const {
    title,
    description,
    imgSrc,
    imgAlt,
    phonenumber,
    phoneUrl,
    email,
    mailTo,
  } = content.contact;
  return (
    <>
      <Section
        title={title}
        description={description}
        imageAlt={imgAlt}
        imageSrc={imgSrc}
      >
        <a id="contact" href={phoneUrl} className={contactLinks}>
          {phonenumber}
        </a>
        <a href={mailTo} className={contactLinks}>
          {email}
        </a>
      </Section>
    </>
  );
};

export default Contact;
