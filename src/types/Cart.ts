import Coffe from "./Coffe";

export interface CartItem extends Coffe {
    quantity: number;
}
interface Cart {
    items: CartItem[]
}

export default Cart;