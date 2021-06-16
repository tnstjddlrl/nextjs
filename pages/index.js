import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>냥냥이!</title>
        <link rel="icon">😺</link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          안녕! 냥냥이!
        </h1>

        <p className={styles.description}>
          여긴 냥냥이를 위한 페이지!
        </p>
      </main>

      <footer className={styles.footer}>
        Powered by Kwon sun seong
      </footer>
    </div>
  )
}
