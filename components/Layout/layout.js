import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../NavBar/navbar'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = "Eric Ma"
const proPic = '../public/propic.jpg'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <title>webportfolio</title>
            </Head>
            <NavBar />
            {children}
        </>
    )
}