import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Spotify from '../components/Spotify.js'


export default function Home({ }) {
  return (
    <>
      <div className="container justify-center w-full lg:w-auto mx-auto my-16">
        <h1 className={utilStyles.headingIndex}>
          <a className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Salvē!</a>
        </h1>
        <h2 className={utilStyles.headingLg}>Welcome to my web portfolio!</h2>
        <div className="container justify-center w-full lg:w-auto mx-auto my-8">
          <h4 className={utilStyles.headingMd}>I'm learning how to develop this website into something of my own voice, digitally. Enjoy your stay.</h4>

        </div>
      </div>
    </>

  )
}