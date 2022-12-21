import { CartContext } from "../../../../context/Cart";
import Coffe from "../../../../types/Coffe";
import CoffeItem from "./CoffeItem";
import style from "./style.module.scss";
import { useContext } from "react";
interface IPropsCoffeList {
    coffeList: Coffe[];
}

const CoffeList: React.FC<IPropsCoffeList> = ({ coffeList }) => {

    const { cart, addToCart, removeFromCard } = useContext(CartContext);

    const quantityCoffeInCart = (id: number) => {
        const { items } = cart;

        const coffe = items.find((item) => item.id === id);

        if (!coffe) {
            return 0
        }

        return coffe.quantity;
    };

    return (
        <div className={style["coffe-continer"]}>
            <h2>Nossos cafés</h2>
            <div className={style["coffe-list"]}>
                {coffeList.map((coffe: Coffe) => (
                    <CoffeItem key={coffe.id}
                        coffe={coffe}
                        quantity={quantityCoffeInCart(coffe.id)}
                        actionPlus={addToCart}
                        actionMinus={removeFromCard} />
                ))}
            </div>


        </div>
    );
};

export default CoffeList;

