import Section from "../Section/Section";
import styles from "./Cv.module.css";
import sectionStyles from "../Section/Section.module.css";
import content from "../../pages/api/content.json";

const Cv = () => {
  const { sectionTitle, sectionDescription } = sectionStyles;
  const {
    cv,
    cvItem,
    date,
    cvTitle,
    link,
    cvDescription,
    learning,
    eduCategory,
    eduItem,
    eduTitle,
  } = styles;
  const { title, description, imgSrc, imgAlt, experience, education } =
    content.cv;
  const experienceList = [];
  for (const [key, value] of Object.entries(experience)) {
    experienceList.push(experience[key]);
  }
  const eduList = [];
  for (const [key, value] of Object.entries(education.schools)) {
    eduList.push(education.schools[key]);
  }
  const eduOnlineList = [];
  for (const [key, value] of Object.entries(education.educationOnline)) {
    eduOnlineList.push(education.educationOnline[key]);
  }

  return (
    <>
      <Section
        title={title}
        description={description}
        imageAlt={imgAlt}
        imageSrc={imgSrc}
      >
        {experience &&
          experienceList.map((item, i) => (
            <>
              <div key={i} className={cv}>
                <div key={i} className={cvItem}>
                  <p className={date}>{item.date}</p>
                  <h3 className={cvTitle}>{item.title}</h3>
                  {!experience.companyLink ? (
                    <p>{item.company}</p>
                  ) : (
                    <a href={experience.companyLink} className={link}>
                      {item.company}
                    </a>
                  )}
                  <p className={cvDescription}>{item.experienceDesc}</p>
                  <p className={learning}>{item.experienceTakeaway}</p>
                </div>
              </div>
            </>
          ))}
        <h2 className={sectionTitle}>{education.title}</h2>
        <p className={sectionDescription}>{education.description}</p>
        <div className={cv}>
          <p className={eduCategory}>{education.educationTypeProfessional}</p>
          {eduList &&
            eduList.map((item, i) => (
              <div key={i} className={eduItem}>
                <p className={date}>{item.date}</p>
                <h5 className={eduTitle}>{item.title}</h5>
                <p className={cvDescription}>{item.degree}</p>
                {!item.schoolLink ? (
                  <p>{item.school}</p>
                ) : (
                  <a href={item.schoolLink} className={link}>
                    {item.school}
                  </a>
                )}
              </div>
            ))}
          <p className={eduCategory}>{education.educationTypeOnline}</p>
          {eduOnlineList &&
            eduOnlineList.map((item, i) => (
              <div key={i} className={eduItem}>
                <p className={date}>{item.date}</p>
                <h5 className={eduTitle}>{item.title}</h5>
                <p className={cvDescription}>{item.degree}</p>
                {!item.schoolLink ? (
                  <p>{item.school}</p>
                ) : (
                  <a href={item.schoolLink} className={link}>
                    {item.school}
                  </a>
                )}
              </div>
            ))}
        </div>
      </Section>
    </>
  );
};

export default Cv;
