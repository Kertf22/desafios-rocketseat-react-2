import { createContext, useState, useEffect } from "react";
import Cart from "../types/Cart";
import Coffe from "../types/Coffe";


interface CartContextType {
    cart: Cart;
    addToCart: (item: Coffe) => void;
    subtractFromCard: (id: number) => void;
    removeFromCard: (id: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);


const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<Cart>({ items: [] });

    const addToCart = (item: Coffe) => {

        const itemIndex = cart.items.findIndex((itemCart) => itemCart.id === item.id);
        // Vou adcionar mais uma quantidade
        if (itemIndex > -1) {
            const newCart = { ...cart }

            newCart.items[itemIndex].quantity += 1;

            setCart(newCart)
            addCartToLocalStorage(newCart)
            return;
        }

        const newItem = {
            ...item,
            quantity: 1
        }

        const newCart: Cart = {
            ...cart,
            items: [...cart.items, newItem]
        }
        setCart(newCart)
        addCartToLocalStorage(newCart)
    }

    const subtractFromCard = (id: number) => {
        const itemIndex = cart.items.findIndex((itemCart) => itemCart.id === id);

        let newCart = { ...cart }
        // Vou adcionar mais uma quantidade
        if (itemIndex > -1) {
            newCart = { ...cart }

            newCart.items[itemIndex].quantity -= 1;

            setCart(newCart)
        }

        const item = cart.items[itemIndex];

        if (item.quantity <= 0) {
            console.log(cart.items.filter((itemCart) => itemCart.id != item.id))
            newCart = { items: cart.items.filter((itemCart) => itemCart.id != item.id) }

            setCart(newCart)
        }

        addCartToLocalStorage(newCart)
    }

    const removeFromCard = (id: number) => {
        const newCart: Cart = { items: cart.items.filter((itemCart) => itemCart.id != id) }

        setCart(newCart)
        addCartToLocalStorage(newCart)
    };

    const addCartToLocalStorage = (cart: Cart) => {
        localStorage.setItem('coffe_cart', JSON.stringify(cart))
    }

    const getCarFromLocalStorage = () => {
        return localStorage.getItem('coffe_cart');
    }

    useEffect(() => {
        const localCart = getCarFromLocalStorage();

        if (localCart) {
            setCart(JSON.parse(localCart))
        }
    }, [])


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCard, subtractFromCard }}>
            {children}
        </CartContext.Provider>
    )
};


export { CartContext, CartProvider };
