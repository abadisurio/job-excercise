import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component className="font-serif" {...pageProps} />
  return (
    <>
      <Navbar />
      <Component className="font-serif" {...pageProps} />
    </>
  )
}

export default MyApp
