import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { NavbarContext, useNavbar } from '../hooks/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component className="font-serif" {...pageProps} />

  const navbar = useNavbar();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
      <NavbarContext.Provider value={navbar}>
        <Navbar />
        <Component className="font-serif" {...pageProps} />
        <Footer />
      </NavbarContext.Provider>
    </>
  )
}

export default MyApp
