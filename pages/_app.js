import '../styles/globals.css'
import Navs from "../common/Navs"


function MyApp({ Component, pageProps }) {
  return (
  <Navs>
  <Component {...pageProps} />
  </Navs>
  )
}

export default MyApp
