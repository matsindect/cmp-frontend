import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suppliers: [],
  isLoading: false,
  error: "",
  replySupplierError: "",
  searchSupplierList: [],
  selectedSupplier: {},
  replyMsg: "",
};

const supplierListSlice = createSlice({
  name: "supplierList",
  initialState,
  reducers: {
    fetchSupplierLoading: (state) => {
      state.isLoading = true;
    },
    fetchSupplierSuccess: (state, action) => {
      state.suppliers = action.payload;
      state.searchSupplierList = action.payload;
      state.isLoading = false;
    },
    fetchSupplierFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchSuppliers: (state, { payload }) => {
      state.searchSupplierList = state.suppliers.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleSupplierLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleSupplierSuccess: (state, { payload }) => {
      state.selectedSupplier = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleSupplierFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeSupplierLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = supplierListSlice;

export const {
  fetchSupplierLoading,
  fetchSupplierSuccess,
  fetchSupplierFail,
  fetchSingleSupplierLoading,
  fetchSingleSupplierSuccess,
  fetchSingleSupplierFail,
  replySupplierLoading,
  replySupplierSuccess,
  replySupplierFail,
  closeSupplierLoading,
  closeSupplierSuccess,
  closeSupplierFail,
  searchSuppliers,
  resetResponseMsg,
} = actions;

export default reducer;
