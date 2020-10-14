import { AppContextProvider } from "../components/AppContext"
import "../sass/custom.scss"

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
