import { FaShoppingCart } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import style from "./style.module.scss";
import img from "../../image/logo.png"
import Image from 'next/image';
import { CartContext } from '../../context/Cart';
import { useContext } from 'react';
import Button from '../Button';
import Router from 'next/router';

const Nav = () => {

    const { cart: { items } } = useContext(CartContext);

    const quantity = items.reduce((acc, item) => acc + item.quantity, 0)


    const onCartClick = () => {
        if (quantity > 0) {
            Router.push("/pedido")
        }
    }

    const onLogoClick = () => {
        Router.push("/")
    }

    return (
        <nav className={style.nav}>
            <div className={style.nav__logo} onClick={onLogoClick}>
                {<Image src={img} alt="logo" height={40} width={80} />}
            </div>

            <ul className={style.nav__list}>
                <li className={style.nav__list__item}>
                    <div className={style.nav__adress}>
                        <MdPlace /><small>Porto Alegre, RS</small>
                    </div>
                </li>
                <li className={style.nav__list__item}>
                    <Button color='yellow-light' onClick={onCartClick}>
                        <FaShoppingCart size={18} /><span>{quantity}</span>
                    </Button>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;