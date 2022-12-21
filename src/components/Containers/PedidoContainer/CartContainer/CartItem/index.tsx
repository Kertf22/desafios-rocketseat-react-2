import { FaTrashAlt } from "react-icons/fa";
import { formatPrice } from "../../../../../format";
import { CartItem } from "../../../../../types/Cart";
import Button from "../../../../Button";
import AccSelected from "../../../../Select/AccSelect";
import style from "../style.module.scss";

interface IPropsCartItem {
    coffe: CartItem;
    actionMinus: () => void;
    actionPlus: () => void;
    removeItem: () => void;
}

const CartItemComponent: React.FC<IPropsCartItem> = ({ coffe, actionMinus, actionPlus,removeItem }) => {


    return (
        <div className={style["cart-item"]}>
            <img
                className={style["cart-item__img"]}
                src={`${coffe.image}`} />

            <div className={style["cart-item__body"]}>
                <h3 className={style["cart-item__title"]}>{coffe.name}</h3>

                <div className={style["cart-item__actions"]}>
                    <AccSelected
                        actionMinus={actionMinus}
                        actionPlus={actionPlus}
                        quantity={coffe.quantity}
                    />
                    <Button color="purple" onClick={removeItem}>
                        <FaTrashAlt size={12} />
                        REMOVER
                    </Button>
                </div>
            </div>


            <span className={style["coffe-item__price"]}>{formatPrice(coffe.price)}</span>
        </div>
    );
};

export default CartItemComponent;

