import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import NowPlaying from '../components/NowPlaying.js'
import TopTracks from '../components/TopTracks.js'


export default function Home({ }) {
  return (
    <div className="flex" >
      <div className="container justify-center w-full lg:w-auto mx-auto my-16">
        <h1 className={utilStyles.headingIndex}>
          <a className="text-white">Salvē!</a>
        </h1>
        <h2 className="font-bold text-white ">Welcome to my web portfolio!</h2>
        <div className="container justify-center w-full lg:w-auto mx-auto my-8">
          <h4 className="text-white max-w-prose">I'm learning how to develop this website into something of my own voice, digitally. Enjoy your stay.</h4>
          <NowPlaying className="" />

        </div>
      </div>

      <div className="container justify-center w-full lg:w-auto mx-auto my-40">
        <TopTracks />
      </div>
    </div>

  )
}