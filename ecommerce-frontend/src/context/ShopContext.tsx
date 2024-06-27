/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, FC, useState } from 'react';
import all_products from '../utils/all_products';

interface ShopContextProps {
    children: ReactNode;
}

interface ShopContextValue {
    all_products: typeof all_products;
    cartItems: any;
    addToCart: any;
    removeFromCart: any;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

const getDefaultCart = () => {
    const cart: any = {};
    for (let index = 0; index < all_products.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider: FC<ShopContextProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId: any) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log("CartItems ",cartItems);
        
    }

    const removeFromCart = (itemId: any) => {
        setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue: ShopContextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
