import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { NavbarContext, useNavbar } from '../hooks/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component className="font-serif" {...pageProps} />

  const navbar = useNavbar();

  return (
    <NavbarContext.Provider value={navbar}>
      <Navbar />
      <Component className="font-serif" {...pageProps} />
      <Footer />
    </NavbarContext.Provider>
  )
}

export default MyApp
