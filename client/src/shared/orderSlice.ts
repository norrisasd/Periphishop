import { createSlice } from "@reduxjs/toolkit";

interface ShippingInformation {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  zip: string;
  cardNumber: string;
  exDate: string;
  cvv: string;
}

type InitialState = {
  shippingInformation: ShippingInformation;
};

const initialState: InitialState = {
  shippingInformation: {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zip: "",
    cardNumber: "",
    exDate: "",
    cvv: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateShippingInfo(state, action) {
      state.shippingInformation = action.payload;
    },
    clearShippingInfo(state) {
      state.shippingInformation = initialState.shippingInformation;
    },
  },
});

export default orderSlice.reducer;
export const { updateShippingInfo, clearShippingInfo } = orderSlice.actions;
