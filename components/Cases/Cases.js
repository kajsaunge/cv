import Section from "../Section/Section";
import styles from "./Cases.module.css";
import content from "../../pages/api/content.json";

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
const Cases = () => {
  const { cases, grid } = styles;
  const { title, description, imgSrc, imgAlt } = content.cases;
  return (
    <>
      <Section
        title={title}
        description={description}
        imageAlt={imgAlt}
        imageSrc={imgSrc}
      >
        <h3 className={cases}>Project cases </h3>
        <div className={grid}></div>
      </Section>
    </>
  );
};

export default Cases;
