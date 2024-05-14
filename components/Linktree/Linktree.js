import styles from './Linktree.module.css';

export default function Linktree({ handleClick }) {
  const art = 'ART';
  const str = 'FRONTEND \n& DESIGN';

  const addLineBreak = () =>
    str.split('\n').map((subStr) => {
      return (
        <>
          {subStr}
          <br />
        </>
      );
    });
  return (
    <>
      <section className={styles.main}>
        <article className={styles.header}>
          <h1>Kajsa Unge</h1>
          <p>Frontend developer & Designer | Visual artist</p>
        </article>
        <article className={styles.grid}>
          <button onClick={handleClick} className={styles.card}>
            <h2 className={styles.cardTitle}>{addLineBreak()}</h2>
          </button>
          <a href='https://konst.kajsaunge.se/' className={styles.card}>
            <h2 className={styles.cardTitle}>{art}</h2>
          </a>
        </article>
      </section>
    </>
  );
}
