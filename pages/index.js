import Head from 'next/head';

import content from './api/content.json';
import Linktree from './Linktree';

export default function Home() {
  const { title, description, font } = content.head;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={description.name} content={description.content} />
        <link rel='icon' href='/favicon.ico' />
        <link href={font.lato} rel='stylesheet' type='text/css' />
        <link href={font.display} rel='stylesheet' type='text/css' />
      </Head>
      <Linktree />
    </>
  );
}
