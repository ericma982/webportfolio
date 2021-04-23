import '../styles/globals.css'
import Layout from '../components/Layout/layout'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";


function MyApp({ Component, pageProps }) {
  return (
    <Layout className="h-screen"><Component {...pageProps} /></Layout>
  )
}

export default MyApp
