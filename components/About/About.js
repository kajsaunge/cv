import Image from "next/image.js";
import Section from "../Section/Section";
import styles from "./About.module.css";

// section.about-content
//     p.section-description.section-description--white= json.specific.author
//     p= json.specific.title
//     p.about-text= json.specific.aboutTextOne
//     p.about-text= json.specific.aboutTextTwo
//     p.about-text= json.specific.aboutTextThree
const About = () => {
  return (
    <Section
      darkTheme
      imageSrc="/kajsa-unge-profile.png"
      imageAlt="Kajsa Unge profile"
      title="Who is she?"
      description="Kajsa Unge"
      subDescription="UI/UX designer | Frontend developer | Illustrator"
    >
      {/* <Image
        src="/kajsa-unge-profile.svg"
        alt="Kajsa Unge profile"
        id="aboutHeader"
        width={342}
        height={330}
        className={styles.sectionImage}
      /> */}

      <section className={styles.aboutContentWrapper}>
        <section className={styles.aboutContent}>
          {/* <h1 id="about" className={styles.sectionTitle}>
            Who is she?
          </h1>
          <p
            className={[
              styles.sectionDescription,
              styles.sectionDescriptionWhite,
            ].join(" ")}
            href="index.html#about"
          >
            Kajsa Unge
          </p> */}
          {/* <p>UI/UX designer | Frontend developer | Illustrator</p> */}
          <p className={styles.aboutText}>
            I'm what they call a hybrid, a multi talented person. My passions
            are broad but somehow they always manage to relate to each other.
            Design is my premier and is where I have my roots. That said,
            frontend development has been a part of my professional role since
            2014.
          </p>
          <p className={styles.aboutText}>
            In the period of one day I switch between sketching with regular pen
            and paper, creating flows and designs in sketch, moving over to
            Visual Studio Code and the terminal. Most often also lots of browser
            or simulator testing. As a hybrid the speed and freedom is high and
            enables the possibility to influence, the process as well as the end
            result. It contributes to a broader understanding of processes and
            concepts, and for colleagues, partners and clients.
          </p>
          <p className={styles.aboutText}>
            Outside work there is a whole lot of play going on, very much often
            with my son Loa, but also in the form of side projects and other
            interests such as drawing, painting, photography and social lofe.
            Absolutely addicted to bubbly water, mustard and list making. A
            couple of times per year I leave the city to spend some quality time
            with family and old friends on my home island Gotland. I'm generally
            a humble and caring person with a positiv attitude. Yep.
          </p>
        </section>
      </section>
    </Section>
  );
};

export default About;
