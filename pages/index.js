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
      </main>

      <footer className={styles.footer}>
        Powered by Kwon sun seong
      </footer>
    </div>
  )
}
