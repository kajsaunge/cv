import Section from "../Section/Section";
import styles from "./Work.module.css";

// section#projectsListContainer.projects-listing
//     -var ProjectsList = []
//     -for(var key in jsonProjects)
//         -ProjectsList.push(jsonProjects[key])
//     each project in ProjectsList
//         -var projectId = project.title.toLowerCase().replace(/\s/g,'')
//         a.projects-listing-item(id= projectId)
//             .projects-listing-item__title
//                 h3= project.title
//                 p= project.tags
//             .projects-listing-item__thumb
//                 img(src= project.thumb, alt= project.thumbAlt)
const Work = () => {
  return (
    <>
      <Section
        title="Work"
        description="Mixed Projects"
        imageAlt="Illustration of digital devices"
        imageSrc="/work-img.png"
      >
        <h3 className={styles.work}>Project cases </h3>
      </Section>
    </>
  );
};

export default Work;
