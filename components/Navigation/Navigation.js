import styles from "./Navigation.module.css";
import content from "../../pages/api/content.json";

const Navigation = () => {
  const {
    navigation,
    homeLink,
    homeLinkLogo,
    navigationLink,
    siteHeader,
    scroll,
  } = styles;
  const { id, homeUrl, imgSrc, imgAlt, about, cases, cv, contact } =
    content.navigation;

  const onClick = (id) => {
    const startLocation = window.pageYOffset;
    let url = document.URL;
    const endLocation = document.getElementById(id).offsetTop + 300;
    const distance = endLocation - startLocation;
    const frames = 16;
    const adjustedEndLocation =
      distance < 0
        ? id === "body"
          ? endLocation
          : endLocation - 140 * 2
        : endLocation - 140;

    const speed = distance < 2000 && distance > -2000 ? 500 : 1000;
    const increments = distance / (speed / frames);
    let windowHeight = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;

    // Interrupt scrollAnimation on user input scroll
    let pageYOffsetCollection = [];
    let onUserScrollStop = function () {
      pageYOffsetCollection.push(pageYOffset);
      for (let i = 0; i < pageYOffsetCollection.length; i++) {
        let current = pageYOffsetCollection[i - 1];
        let previous = pageYOffsetCollection[i - 2];
        adjustedEndLocation >= startLocation
          ? current < previous
            ? clearInterval(runAnimation)
            : ""
          : current > previous
          ? clearInterval(runAnimation)
          : "";
      }
    };

    let stopAnimation = () => {
      let pageYOffset = window.pageYOffset;

      if (adjustedEndLocation >= startLocation) {
        onUserScrollStop();
        if (
          pageYOffset >= adjustedEndLocation - increments ||
          windowHeight + pageYOffset >= bodyHeight
        ) {
          clearInterval(runAnimation);
        }
      } else {
        onUserScrollStop();
        if (
          pageYOffset <= adjustedEndLocation - increments ||
          windowHeight - pageYOffset >= bodyHeight
        ) {
          clearInterval(runAnimation);
        }
      }
    };

    const animateScroll = () => {
      window.scrollBy(0, increments);
      stopAnimation();
    };

    const runAnimation = setInterval(animateScroll, frames);
  };
  return (
    <div>
      <nav id={id} className={navigation}>
        <button
          onClick={() => onClick("home")}
          className={[homeLink, navigationLink].join(" ")}
        >
          <img src={imgSrc} alt={imgAlt} className={homeLinkLogo} />
        </button>
        <button onClick={() => onClick("about")} className={navigationLink}>
          {about}
        </button>
        <button onClick={() => onClick("cases")} className={navigationLink}>
          {cases}
        </button>
        <button onClick={() => onClick("cv")} className={navigationLink}>
          {cv}
        </button>
        <button onClick={() => onClick("contact")} className={navigationLink}>
          {contact}
        </button>
      </nav>
      <header className={siteHeader}></header>
    </div>
  );
};

export default Navigation;
