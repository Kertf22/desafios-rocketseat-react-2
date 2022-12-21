
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import style from "./style.module.scss";
import Image from 'next/image';
import coffeImage from '../../../../image/coffe.png'
import BackGround from '../../../../image/bg.png'


const HomeInfo = () => {

    return (
        <div className={style.home_info} style={{ backgroundImage: `url(${BackGround.src})` }}>
            <div className={style.home_info_right}>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

                <ul className={style.home_info_list}>
                    <li className={`${style.home_info_list_item}`}>
                        <div className={`${style.icon} ${style.yellow}`} >
                            <FaShoppingCart
                            />
                        </div>

                        Compra simples e segura
                    </li>
                    <li className={`${style.home_info_list_item}`}>
                        <div className={`${style.icon} ${style.gray}`}>
                            <GiCardboardBoxClosed
                            />
                        </div>

                        Embalagem mantém o café intacto
                    </li>
                    <li className={`${style.home_info_list_item}`}>
                        <div className={`${style.icon} ${style["yellow-light"]}`}>
                            <AiOutlineClockCircle
                            />
                        </div>

                        Entrega rápida e rastreada
                    </li>
                    <li className={`${style.home_info_list_item}`}>
                        <div className={`${style.icon} ${style.purple}`} >
                            <FiCoffee
                            />
                        </div>

                        O café chega fresquinho até você
                    </li>
                </ul>
            </div>

            <div className={style.home_info_left}>
                <Image width="700" src={coffeImage} alt="coffie" />
            </div>
        </div>
    )
};

export default HomeInfo;