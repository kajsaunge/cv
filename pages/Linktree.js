'use client';
import styles from '../styles/Linktree.module.css';
import { useRouter } from 'next/router';

export default function Linktree() {
  const router = useRouter();
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
    <section className={styles.main}>
      <article className={styles.header}>
        <h1>Kajsa Unge</h1>
        <p>Frontend developer & Designer | Visual artist</p>
      </article>
      <article className={styles.grid}>
        <button
          type='button'
          onClick={() => router.push('/cv')}
          className={styles.card}
        >
          <h2 className={styles.cardTitle}>{addLineBreak()}</h2>
        </button>
        <a href='https://konst.kajsaunge.se/' className={styles.card}>
          <h2 className={styles.cardTitle}>{art}</h2>
        </a>
      </article>
    </section>
  );
}
