import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Product = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};
type InitialState = {
  cartItems: Product[];
  numOfItems: number;
};
const initialState: InitialState = {
  cartItems: [],
  numOfItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      let check = true;
      state.cartItems.map((item) => {
        if (item.name === action.payload.name) {
          item.quantity++;
          check = false;
        }
        return null;
      });
      if (check) {
        action.payload.quantity = 1;
        state.cartItems.push(action.payload);
      }
      state.numOfItems++;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cartItems.map((item) => {
        if (item.name === action.payload) {
          state.numOfItems -= item.quantity;
        }
        return null;
      });
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload
      );
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const index = state.cartItems.findIndex(
        (item) => item.name === action.payload
      );
      state.cartItems[index].quantity++;
      state.numOfItems++;
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const index = state.cartItems.findIndex(
        (item) => item.name === action.payload
      );

      state.cartItems[index].quantity--;
      state.numOfItems--;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decreaseQuantity,
} = cartSlice.actions;
