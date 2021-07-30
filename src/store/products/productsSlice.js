import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  replyProductError: "",
  searchProductList: [],
  selectedProduct: {},
  replyMsg: "",
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fetchProductLoading: (state) => {
      state.isLoading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.products = action.payload;
      state.searchProductList = action.payload;
      state.isLoading = false;
    },
    fetchProductFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchProducts: (state, { payload }) => {
      state.searchProductList = state.products.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleProductLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleProductSuccess: (state, { payload }) => {
      state.selectedProduct = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleProductFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeProductLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = productListSlice;

export const {
  fetchProductLoading,
  fetchProductSuccess,
  fetchProductFail,
  fetchSingleProductLoading,
  fetchSingleProductSuccess,
  fetchSingleProductFail,
  replyProductLoading,
  replyProductSuccess,
  replyProductFail,
  closeProductLoading,
  closeProductSuccess,
  closeProductFail,
  searchProducts,
  resetResponseMsg,
} = actions;

export default reducer;
