import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { CartProvider } from '../context/Cart'
import { CoffeContext, CoffeProvider } from '../context/Coffe'
import { useContext } from "react"

export default function App({ Component, pageProps }: AppProps) {
  // const { setCoffes } = useContext(CoffeContext);

  // setCoffes(pageProps.coffeList);
  
  return (
    <CoffeProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </CoffeProvider>
  )
}
