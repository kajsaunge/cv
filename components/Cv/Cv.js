import Section from "../Section/Section";
import styles from "./Cv.module.css";

// .cv-content
//     -var experienceList = []
//     -for(var key in jsonExperience)
//         -experienceList.push(jsonExperience[key])
//     each experience in experienceList
//         .cv-item
//             p.cv-date= experience.date
//             h3.cv-title= experience.title
//             if !experience.companyLink
//                 p= experience.company
//             else
//                 a.cv-link(href= experience.companyLink)= experience.company
//             p.cv-description= experience.experienceDesc
//             p.cv-learning= experience.experienceTakeaway
// h2.section-title= json.generic.education
// p.section-description= json.generic.educationText
// .cv-content
//     p.edu-category= json.generic.educationTypeProfessional
//         -var educationList = []
//         -for(var key in jsonEdu)
//             -educationList.push(jsonEdu[key])
//         each education in educationList
//             .edu-item
//                 p.cv-date= education.date
//                 h5.edu-title= education.degree
//                 if !education.schoolLink
//                     p= education.school
//                 else
//                     a.link-yellow(href= education.schoolLink target="_blank")= education.school
//     p.edu-category= json.generic.educationTypeOnline
//         -var educationOnlineList = []
//         -for(var key in jsonEduOnline)
//             -educationOnlineList.push(jsonEduOnline[key])
//         each educationOnline in educationOnlineList
//             .edu-item
//                 p.cv-date= educationOnline.date
//                 h5.edu-title= educationOnline.degree
//                 if !educationOnline.schoolLink
//                     p= educationOnline.school
//                 else
//                     a.link-yellow(href= educationOnline.schoolLink target="_blank")= educationOnline.school
const Cv = () => {
  return (
    <>
      <Section
        title="Cv"
        description="& work experience"
        imageAlt="Illustration of tools"
        imageSrc="/cv-img.png"
      >
        <h3 className={styles.cv}>List of work and edu </h3>
      </Section>
    </>
  );
};

export default Cv;
