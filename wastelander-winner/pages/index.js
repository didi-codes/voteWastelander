import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src="./video/scavengers.mp4" />
      </video>
      <Head>
        <title>Wild Wild Wasteland</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preload" href="/fonts/FalloutFont/FalloutFont.ttf" />
        <link rel="preload" href="/fonts/Monofonto/monofonto.otf" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome To The Wild Wild Wasteland
        </h1>

        <h5 className={styles.subtitle}>You are connected to Wasteland Hifi</h5>

        <p className={styles.description}>
         It's that time of the night where you decide the fate of one of your commrades...
        </p>

        <div className={styles.btn}>
          <Link href="/">
            <a>
              Smash the button to select your tribute...
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
