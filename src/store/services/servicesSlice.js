import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  isLoading: false,
  error: "",
  replyServiceError: "",
  searchServiceList: [],
  selectedService: {},
  replyMsg: "",
};

const serviceListSlice = createSlice({
  name: "serviceList",
  initialState,
  reducers: {
    fetchServiceLoading: (state) => {
      state.isLoading = true;
    },
    fetchServiceSuccess: (state, action) => {
      state.services = action.payload;
      state.searchServiceList = action.payload;
      state.isLoading = false;
    },
    fetchServiceFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchServices: (state, { payload }) => {
      state.searchServiceList = state.services.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleServiceLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleServiceSuccess: (state, { payload }) => {
      state.selectedService = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleServiceFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeServiceLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = serviceListSlice;

export const {
  fetchServiceLoading,
  fetchServiceSuccess,
  fetchServiceFail,
  fetchSingleServiceLoading,
  fetchSingleServiceSuccess,
  fetchSingleServiceFail,
  replyServiceLoading,
  replyServiceSuccess,
  replyServiceFail,
  closeServiceLoading,
  closeServiceSuccess,
  closeServiceFail,
  searchServices,
  resetResponseMsg,
} = actions;

export default reducer;
