import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CoffeList from '../components/Containers/HomeContainer/CoffeList'
import HomeInfo from '../components/Containers/HomeContainer/HomeInfo'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'
import { CoffeContext } from '../context/Coffe';
import { useContext } from "react"

export default function Home(pageProps: any) {

  const { coffes, setCoffes } = useContext(CoffeContext);
  setCoffes(pageProps.coffeList);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Shop Delivery</title>
        <meta name="description" content="Coffe Shop Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>

        <HomeInfo />

        <CoffeList coffeList={coffes} />
      </main >

    </div >
  )
};

const getCoffeList = async () => {
  const response = await fetch("http://localhost:3000/api/coffe");
  const data = await response.json();
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { coffeList } = await getCoffeList() ?? [];

  return {
    props: {
      coffeList,
    },
  };
}
