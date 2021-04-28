import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar.js'
import styles from './layout.module.css'

const name = "Eric Ma"
const proPic = '../public/propic.jpg'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <title>Eric Ma</title>
            </Head>
            <div className="bg-home-page h-screen bg-center bg-cover">
                <NavBar />
                {children}
            </div>
        </>
    )
}