import '../styles/globals.css'
import Layout from '../components/Layout/layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout className="h-screen"><Component {...pageProps} /></Layout>
  )
}

export default MyApp
