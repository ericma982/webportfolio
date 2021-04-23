import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Spotify from '../components/spotify/Spotify.js'


export default function Home({ }) {
  return (
    <>
      <div className="container justify-center w-full lg:w-auto mx-auto my-16">
        <h1 className={utilStyles.headingIndex}>Salvē!</h1>
        <h2 className={utilStyles.headingLg}>Welcome to my web portfolio!</h2>
        <div className="container justify-center w-full lg:w-auto mx-auto my-8">
          <h4 className={utilStyles.headingMd}>Come check out some of my projects.</h4>

        </div>
a
      </div>
    </>

  )
}