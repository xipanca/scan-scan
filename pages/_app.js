import '../styles/globals.css'
import Header from '../components/Header'
import getConfig from 'next/config'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps, pages }) {
  return (
    <>
      <Header pages={pages}/>
      <Component {...pageProps} />
    </>
  )
}

const {publicRuntimeConfig} = getConfig()

MyApp.getInitialProps = async () => {
  const { data : pages } = await axios(`${publicRuntimeConfig.API_URL}/pages`)

  return { pages }
}

export default MyApp
