import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CartContainer } from '../components/Containers/CartContainer'
import FormularioContainer from '../components/Containers/PedidoContainer/Formulario'
import PedidoContainer from '../components/Containers/PedidoContainer'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'


export default function Pedido(pageProps: any) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Shop Delivery</title>
        <meta name="description" content="Coffe Shop Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <PedidoContainer />
        {/* <CartComponent /> */}

      </main >

    </div >
  )
};

