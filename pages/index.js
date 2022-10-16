import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Cv from "../components/Cv/Cv";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import Cases from "../components/Cases/Cases";
import styles from "../styles/Index.module.css";

import content from "./api/content.json";

export default function Home() {
  const { title, description, font } = content.head;
  return (
    <div className={styles.site}>
      <Head>
        <title>{title}</title>
        <meta name={description.name} content={description.content} />
        <link rel="icon" href="/favicon.ico" />
        <link href={font.lato} rel="stylesheet" type="text/css" />
        <link href={font.display} rel="stylesheet" type="text/css" />
      </Head>

      <Navigation />
      <main className={styles.main}>
        <About />
        <Cases />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
