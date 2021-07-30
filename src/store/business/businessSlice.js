import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businesss: [],
  isLoading: false,
  error: "",
  replyBusinessError: "",
  searchBusinessList: [],
  selectedBusiness: {},
  replyMsg: "",
};

const businessListSlice = createSlice({
  name: "businessList",
  initialState,
  reducers: {
    fetchBusinessLoading: (state) => {
      state.isLoading = true;
    },
    fetchBusinessSuccess: (state, action) => {
      state.businesss = action.payload;
      state.searchBusinessList = action.payload;
      state.isLoading = false;
    },
    fetchBusinessFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchBusinesss: (state, { payload }) => {
      state.searchBusinessList = state.businesss.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleBusinessLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleBusinessSuccess: (state, { payload }) => {
      state.selectedBusiness = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleBusinessFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeBusinessLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = businessListSlice;

export const {
  fetchBusinessLoading,
  fetchBusinessSuccess,
  fetchBusinessFail,
  fetchSingleBusinessLoading,
  fetchSingleBusinessSuccess,
  fetchSingleBusinessFail,
  replyBusinessLoading,
  replyBusinessSuccess,
  replyBusinessFail,
  closeBusinessLoading,
  closeBusinessSuccess,
  closeBusinessFail,
  searchBusinesss,
  resetResponseMsg,
} = actions;

export default reducer;
