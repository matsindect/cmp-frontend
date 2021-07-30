import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
  error: "",
  replyCategoryError: "",
  searchCategoryList: [],
  selectedCategory: {},
  replyMsg: "",
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    fetchCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchCategorySuccess: (state, action) => {
      state.categories = action.payload;
      state.searchCategoryList = action.payload;
      state.isLoading = false;
    },
    fetchCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchCategories: (state, { payload }) => {
      state.searchCategoryList = state.categories.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleCategorySuccess: (state, { payload }) => {
      state.selectedCategory = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeCategoryLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = categoryListSlice;

export const {
  fetchCategoryLoading,
  fetchCategorySuccess,
  fetchCategoryFail,
  fetchSingleCategoryLoading,
  fetchSingleCategorySuccess,
  fetchSingleCategoryFail,
  replyCategoryLoading,
  replyCategorySuccess,
  replyCategoryFail,
  closeCategoryLoading,
  closeCategorySuccess,
  closeCategoryFail,
  searchCategories,
  resetResponseMsg,
} = actions;

export default reducer;
