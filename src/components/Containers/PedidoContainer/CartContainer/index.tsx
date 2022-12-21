import { CartContext } from "../../../../context/Cart";
import { useContext } from "react";
import style from "./style.module.scss";
import Button from "../../../Button";
import CartItemComponent from "./CartItem";
import { formatPrice } from "../../../../format";
import Router from "next/router";
import { Form } from "../../PedidoContainer";

interface CartContainerProps {
    form: Form;
    error: boolean;
};

const CartContainer = ({ form, error }: CartContainerProps) => {

    const { cart: { items }, removeFromCard, subtractFromCard, addToCart } = useContext(CartContext);

    const sumPriceItems = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const entrega = 5.00;

    const finalPrice = sumPriceItems + entrega;

    const handleConfirm = () => {
        console.log(error,"aqui")

        if (!error) {
            Router.push("/success?id=s");
        }
    };

    return (
        <div className={style["cart-container"]}>
            <h2>Cafés selecionados</h2>


            <div className={style["cart-card"]}>

                {(items.length === 0) ?
                    (<p>The cart is empty</p>) :
                    <>
                        <div className={style["cart-item-list"]}>
                            {items.map((item) => (
                                <CartItemComponent
                                    key={item.id}
                                    coffe={item}
                                    removeItem={() => removeFromCard(item.id)}
                                    actionMinus={() => subtractFromCard(item.id)}
                                    actionPlus={() => addToCart(item)}
                                />
                            ))}
                        </div>


                        <div className={style["cart-info"]}>
                            <div className={style["cart-info-price"]}>
                                <span>Total de itens</span>
                                <span>{formatPrice(sumPriceItems)}</span>

                            </div >
                            <div className={style["cart-info-price"]}>
                                <span>Entrega</span>
                                <span>{formatPrice(entrega)}</span>
                            </div>
                            <div className={style["cart-info-price-total"]}>
                                <span>Total</span>
                                <span>{formatPrice(finalPrice)}</span>
                            </div>
                        </div>

                        <Button color="secondary" onClick={handleConfirm}>
                            CONFIRMAR PEDIDO
                        </Button>
                    </>
                }



            </div>
        </div>
    );

};

export { CartContainer }