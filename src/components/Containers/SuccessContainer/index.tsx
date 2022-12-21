import style from './style.module.scss';
import entrega from "../../../image/entrega.png"
import { MdPlace } from 'react-icons/md';

interface SuccessContainerProps {
    endereco: {
        rua: string;
        numero: string;
        bairro: string;
        cep: string;
        cidade: string;
        estado: string;
    };
    previsao: string;
    pagamento: string;
}

const SuccessContainer = ({ endereco, previsao, pagamento }: SuccessContainerProps) => {

    const { rua, numero, bairro, cep, cidade, estado } = endereco;

    const formatEndereco = `${rua}, ${numero}  ${bairro} - ${cidade}, ${estado}`;

    return (
        <div  className={style["content"]}>
            <div className={style["content-left"]}>
                <h1 className={style["content-left-title"]}>Uhu! Pedido Confirmado</h1>
                <p className={style["content-left-subtitle"]}>Agora é só aguardar que logo o café chegará até você</p>

                <div className={style["content-card"]}>
                    <div className={style["content-card-item"]}>
                        <div className={`${style.icon} ${style["purple"]}`}>
                            <MdPlace />
                        </div>

                        <span>Entrega em {formatEndereco}</span>
                    </div>
                    <div className={style["content-card-item"]}>
                        <div className={`${style.icon} ${style["yellow-light"]}`}>
                            <MdPlace />
                        </div>
                        <span>Previsao de entrega <br/>  <strong>{previsao}</strong></span>
                    </div>
                    <div className={style["content-card-item"]}>
                        <div className={`${style.icon} ${style["yellow-dark"]}`}>
                            <MdPlace />
                        </div>
                        <span>Pagamento na entrega <br/> <strong>{pagamento}</strong></span>
                    </div>

                </div>
            </div>

            <div className={style["content-right"]}>
                <img
                    src={entrega.src}
                />
            </div>
        </div>

    )

};

export default SuccessContainer;