import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice' //default export Line 45

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});