import { FaShoppingCart } from "react-icons/fa";
import { formatPrice } from "../../../../../format";
import Coffe from "../../../../../types/Coffe";
import Button from "../../../../Button";
import AccSelected from "../../../../Select/AccSelect";
import style from "../style.module.scss";

interface IPropsCoffeItem {
    coffe: Coffe;
    quantity: number;
    actionMinus: (id: number) => void;
    actionPlus: (coffe: Coffe) => void;
}

const CoffeItem: React.FC<IPropsCoffeItem> = ({ coffe, quantity, actionMinus, actionPlus }) => {

    const hanldeActionMinus = () => {
        if (quantity === 0) {
            return;
        }

        actionMinus(coffe.id);
    };

    const hanldeActionPlus = () => {
        actionPlus(coffe)
    }


    return (
        <div className={style["coffe-item"]}>
            <img
                className={style["coffe-item__img"]}
                src={`${coffe.image}`} />
            <div className={style["coffe-tags"]}>
                {coffe.tags.map((tag) => (
                    <span className={style["coffe-tags__item"]}>{tag}</span>
                ))}
            </div>


            <h3 className={style["coffe-item__title"]}>{coffe.name}</h3>
            <p className={style["coffe-item__descr"]}>{coffe.description}</p>

            <div className={style["coffe-item__down"]}>
                <span className={style["coffe-item__price"]}>{formatPrice(coffe.price)}</span>
                <AccSelected
                    actionMinus={hanldeActionMinus}
                    actionPlus={hanldeActionPlus}
                    quantity={quantity}
                />
                <Button color="purple">
                    <FaShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
};

export default CoffeItem;

