import { useState } from "react";
import Section from "../Section/Section";
import styles from "./Cases.module.css";
import content from "../../pages/api/content.json";
import Case from "../Case/Case";

const Cases = () => {
  const [activeCase, setActiveCase] = useState(null);
  const { cases, casesItem, casesItem__title, casesItem__thumb } = styles;
  const { title, description, imgSrc, imgAlt } = content.cases;
  const projects = [];
  for (const [key, value] of Object.entries(content.projects)) {
    projects.push(content.projects[key]);
  }
  const colors = [
    "#d3565e",
    "#ff554d",
    "#18ad93",
    "#08715f",
    "#39B6CC",
    "#123456",
    "#0A424C",
    "#E5C333",
  ];

  return (
    <>
      <Section
        title={title}
        description={description}
        imageAlt={imgAlt}
        imageSrc={imgSrc}
      >
        <div id="cases" className={cases}>
          {projects.map((project, i) => (
            <>
              <button
                key={i}
                id={project.id}
                className={casesItem}
                style={{ background: colors[i] }}
                onClick={() => setActiveCase(project)}
              >
                <div className={casesItem__title}>
                  <h3>{project.title}</h3>
                  <p>{project.tags}</p>
                </div>
                <div className={casesItem__thumb}>
                  <img src={project.thumb} alt={project.thumbAlt} />
                </div>
              </button>
            </>
          ))}
        </div>
        {activeCase && <Case activeCase={activeCase} />}
      </Section>
    </>
  );
};

export default Cases;
