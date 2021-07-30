import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceCategories: [],
  isLoading: false,
  error: "",
  replyServiceCategoryError: "",
  searchServiceCategoryList: [],
  selectedServiceCategory: {},
  replyMsg: "",
};

const serviceCategoryListSlice = createSlice({
  name: "serviceCategoryList",
  initialState,
  reducers: {
    fetchServiceCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchServiceCategorySuccess: (state, action) => {
      state.serviceCategories = action.payload;
      state.searchServiceCategoryList = action.payload;
      state.isLoading = false;
    },
    fetchServiceCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchServiceCategories: (state, { payload }) => {
      state.searchServiceCategoryList = state.serviceCategories.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleServiceCategoryLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleServiceCategorySuccess: (state, { payload }) => {
      state.selectedServiceCategory = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleServiceCategoryFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeServiceCategoryLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = serviceCategoryListSlice;

export const {
  fetchServiceCategoryLoading,
  fetchServiceCategorySuccess,
  fetchServiceCategoryFail,
  fetchSingleServiceCategoryLoading,
  fetchSingleServiceCategorySuccess,
  fetchSingleServiceCategoryFail,
  replyServiceCategoryLoading,
  replyServiceCategorySuccess,
  replyServiceCategoryFail,
  closeServiceCategoryLoading,
  closeServiceCategorySuccess,
  closeServiceCategoryFail,
  searchServiceCategories,
  resetResponseMsg,
} = actions;

export default reducer;
