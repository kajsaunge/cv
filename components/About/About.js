import Section from '../Section/Section';
import styles from './About.module.css';
import content from '../../pages/api/content.json';

const About = () => {
  const {
    imgSrc,
    imgAlt,
    title,
    author,
    description,
    aboutTextOne,
    aboutTextTwo,
    aboutTextThree,
  } = content.about;
  return (
    <Section
      darkTheme
      imageSrc={imgSrc}
      imageAlt={imgAlt}
      title={title}
      description={author}
      subDescription={description}
    >
      <section id='about' className={styles.aboutContent}>
        <p className={styles.aboutText}>{aboutTextOne}</p>
        <p className={styles.aboutText}>{aboutTextTwo}</p>
        <p className={styles.aboutText}>{aboutTextThree}</p>
      </section>
    </Section>
  );
};

export default About;
