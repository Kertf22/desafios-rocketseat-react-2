import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';
import SuccessContainer from '../components/Containers/SuccessContainer';
import Router from 'next/router';


export default function Success(pageProps: any) {

    const form = JSON.parse(localStorage.getItem("entrega_form") || "{}");

    if (!form) Router.push("/");

    const { cep, rua, numero, complemento, bairro, cidade, estado, pagamento } = form;

    const endereco = {
        cep, rua, numero, complemento, bairro, cidade, estado
    }

    const previsao = "30 minutos";


    const formPagamento = {
        "dinheiro": "Dinheiro",
        "cartao_credito": "Cartão de Crédito",
        "cartao_debito": "Cartão de Débito",
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Coffe Shop Delivery</title>
                <meta name="description" content="Coffe Shop Delivery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>

                <SuccessContainer
                    endereco={endereco}
                    previsao={previsao}
                    pagamento={formPagamento[pagamento as keyof typeof formPagamento]}
                />
            </main >

        </div >
    )
};



export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    return {
        props: {
        },
    };
}
