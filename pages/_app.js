import '../styles/globals.css'
import Layout from '../components/Layout.js'
import axios from 'axios'

axios.defaults.baseURL = "https://www.ericswma.com"

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="h-screen"><Component {...pageProps} /></Layout>
  )
}

export default MyApp
