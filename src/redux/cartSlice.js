import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";

const initialState = {
  products: productData,
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart(state, action) {

      //! First Way

      const existingItem = state.cartItems.find(item => item.id === action.payload.id)

      if(existingItem){
        existingItem.amount += action.payload.amount
      }else {
        state.cartItems.push(action.payload)
      } 

      //! Second Way 

      /* const existingCartItems = state.cartItems.findIndex(item => item.id === action.payload.id)
      
      let updatedItems = [...state.cartItems]

      if(existingCartItems !== -1){
        updatedItems[existingCartItems] = {
          ...state.cartItems[existingCartItems],
          amount: state.cartItems[existingCartItems].amount + action.payload.amount
        }
      }else {
        updatedItems= [...state.cartItems, action.payload]
      } 

      state.cartItems = updatedItems */

    },
    deleteItem(state, action) {
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload)
      state.cartItems = filteredItems
    },
    deleteAll(state) {
      state.cartItems = initialState.cartItems
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
