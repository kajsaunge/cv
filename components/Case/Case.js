import { useEffect, useState } from 'react';
import content from '../../pages/api/content.json';
import styles from './Case.module.css';

const useFade = (initial) => {
  const [show, setShow] = useState(initial);
  const [isActive, setIsActive] = useState(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setIsActive(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) setIsActive(false);
  };

  const style = {
    animation: `${show ? styles.unfoldIn : styles.unfoldOut} .4s`,
  };

  // These props go on the fading DOM element
  const fadeProps = {
    style,
    onAnimationEnd,
  };

  return [isActive, setShow, fadeProps];
};
const Case = ({ activeCase }) => {
  const [isActive, setIsActive, fadeProps] = useFade(true);

  useEffect(() => {
    if (activeCase) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeCase, setIsActive]);
  return (
    <>
      {isActive && (
        <section
          {...fadeProps}
          className={isActive ? styles.overlayActive : styles.overlay}
        >
          <button
            onClick={() => setIsActive(!isActive)}
            className={styles.closeButton}
          >
            <span>Stäng projekt</span>
          </button>

          <section
            id={activeCase.id}
            {...fadeProps}
            className={isActive ? styles.projectViewActive : styles.projectView}
          >
            <div className={styles.header}>
              <img
                className={styles.headerImg}
                src={activeCase.header}
                alt={activeCase.headerAlt}
              />
              <div className={styles.headerContent}>
                <h1>{activeCase.client}</h1>
                <p className={styles.tag}>{activeCase.tags}</p>
                <p className={styles.quote}>{activeCase.clientQuote}</p>
              </div>
            </div>
            <div className={styles.intro}>
              <article className={styles.introColumn}>
                <h2>{content.subHeadings.client}</h2>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={activeCase.clientLink}
                  className={styles.clientLink}
                >
                  {activeCase.client}
                </a>
                <p>{activeCase.clientText}</p>
              </article>
              <article className={styles.introColumn}>
                <h2>{content.subHeadings.project}</h2>
                <p className={styles.titleDescription}>
                  {activeCase.projectDates}
                </p>
                <p>{activeCase.projectText}</p>
              </article>
              <article className={styles.introColumn}>
                <h2>{content.subHeadings.process}</h2>
                <p className={styles.titleDescription}>
                  {activeCase.processWhat}
                </p>
                <p>{activeCase.processText}</p>
              </article>
            </div>
            <div className={styles.divider}>
              <h2 className={styles.dividerTitle}>{activeCase.mainImgTitle}</h2>
              <p className={styles.dividerDescription}>
                {activeCase.mainImgText}
              </p>
              <img
                className={styles.dividerImg}
                src={activeCase.mainImg}
                alt={activeCase.mainImgAlt}
              />
            </div>
            <div className={styles.projectDetails}>
              <img
                className={styles.projectDetailsImg}
                src={activeCase.detailsImg}
                alt={activeCase.detailsImgAlt}
              />
              <div className={styles.projectDetailsContent}>
                <h5>{activeCase.detailsOne}</h5>
                <p>{activeCase.detailsOneText}</p>
                <h5>{activeCase.detailsTwo}</h5>
                <p>{activeCase.detailsTwoText}</p>
                <h5>{activeCase.detailsThree}</h5>
                <p>{activeCase.detailsThreeText}</p>
                <h5>{activeCase.detailsFour}</h5>
                <p>{activeCase.detailsFourText}</p>
                <h5>{activeCase.detailsFive}</h5>
                <p>{activeCase.detailsFiveText}</p>
                <h5>{activeCase.detailsSix}</h5>
                <p>{activeCase.detailsSixText}</p>
                <h5>{activeCase.detailsSeven}</h5>
                <p>{activeCase.detailsSevenText}</p>
                <h5>{activeCase.detailsEight}</h5>
                <p>{activeCase.detailsEighText}</p>
              </div>
            </div>
            <div className={styles.divider}>
              <h2 className={styles.dividerTitle}>
                {activeCase.dividerTitleTwo}
              </h2>
              <p className={styles.dividerDescription}>
                {activeCase.dividerDescTwo}
              </p>
              <img
                className={
                  activeCase.id === 'callabroad'
                    ? styles.dividerImgCallAbroad
                    : styles.dividerImg
                }
                src={activeCase.dividerImgTwo}
                alt={activeCase.dividerImgAltTwo}
              />
            </div>
            <div className={styles.summery}>
              <img
                className={styles.dividerImg}
                src={activeCase.summeryImg}
                alt={activeCase.summeryImgAlt}
              />
              <h2>{content.subHeadings.footer}</h2>
              <p>{activeCase.footerText}</p>
            </div>
          </section>
        </section>
      )}
    </>
  );
};
export default Case;
