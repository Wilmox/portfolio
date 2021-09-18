import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import styles from '../../styles/Home.module.css';
import slugStyle from '../../styles/Slug.module.css';

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation'
import Chip from '../../components/Chip/Chip'

import { getAllProjects } from '../../lib/data';

export default function ProjectPage({ title, type, description, duration, headerImg, slug, labelText, labelColors, labelIcons, teamSize, content}) {
  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Simon Wilmots {"\u{1F680}"}</title>
        <meta name="description" content="SIMONWILMOTS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <section>
          <Navigation />
        </section>
        <header className={slugStyle.header}>
          <h1 className={slugStyle.title}>{title}</h1>
          <h2 className={slugStyle.author}>{type}</h2>

          <div className={slugStyle.labels}>
            {labelText.map((label, i) => <Chip key={labelText[i]} className={slugStyle.noteChip} bgColor={labelColors[i]} text={labelText[i]} icon={labelIcons[i]} />)}
          </div>
          <hr className={styles.divider} />

          <div className={slugStyle.noteMeta}>
            <div className={slugStyle.metaItem}>
              <h4>Duration</h4>
              <p>{duration}</p>
            </div>
            <div className={slugStyle.metaItem}>
              <h4>Team size</h4>
              <p>{teamSize}</p>
            </div>
          </div>

          <div>
          </div>
        </header>

        <article className={slugStyle.noteArticle}>
          <p className={slugStyle.abstract}>{description}</p>

          <div className={slugStyle.articleContent}>
            <MDXRemote {...content} />
          </div>

          <p className={slugStyle.slug}>{"simonwilmots.be/project/" + slug}</p>
        </article>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const allProjects = getAllProjects();
  const { content, data } = allProjects.find((project) => project.slug === params.slug);

  const mdxSource = await serialize(content)


  return {
    props: {
      //Here data serialising (dates, urls, ...),
      ...data,
      content: mdxSource,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllProjects().map(project => ({
      params: {
        slug: project.slug
      }
    })),
    fallback: false,
  };
}