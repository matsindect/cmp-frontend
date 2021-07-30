import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCategories: [],
  isLoading: false,
  error: "",
  replyProductCategoryError: "",
  searchProductCategoryList: [],
  selectedProductCategory: {},
  replyMsg: "",
};

const productCategoryListSlice = createSlice({
  name: "productCategoryList",
  initialState,
  reducers: {
    fetchProductCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchProductCategorySuccess: (state, action) => {
      state.productCategories = action.payload;
      state.searchProductCategoryList = action.payload;
      state.isLoading = false;
    },
    fetchProductCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchProductCategories: (state, { payload }) => {
      state.searchProductCategoryList = state.productCategories.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleProductCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleProductCategorySuccess: (state, { payload }) => {
      state.selectedProductCategory = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleProductCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeProductCategoryLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = productCategoryListSlice;

export const {
  fetchProductCategoryLoading,
  fetchProductCategorySuccess,
  fetchProductCategoryFail,
  fetchSingleProductCategoryLoading,
  fetchSingleProductCategorySuccess,
  fetchSingleProductCategoryFail,
  replyProductCategoryLoading,
  replyProductCategorySuccess,
  replyProductCategoryFail,
  closeProductCategoryLoading,
  closeProductCategorySuccess,
  closeProductCategoryFail,
  searchProductCategories,
  resetResponseMsg,
} = actions;

export default reducer;
