import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import NavBar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    );
  }

export default MyApp
