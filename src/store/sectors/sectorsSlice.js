import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectors: [],
  isLoading: false,
  error: "",
  replySectorError: "",
  searchSectorList: [],
  selectedSector: {},
  replyMsg: "",
};

const sectorListSlice = createSlice({
  name: "sectorList",
  initialState,
  reducers: {
    fetchSectorLoading: (state) => {
      state.isLoading = true;
    },
    fetchSectorSuccess: (state, action) => {
      state.sectors = action.payload;
      state.searchSectorList = action.payload;
      state.isLoading = false;
    },
    fetchSectorFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchSectors: (state, { payload }) => {
      state.searchSectorList = state.sectors.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleSectorLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleSectorSuccess: (state, { payload }) => {
      state.selectedSector = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleSectorFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    closeSectorLoading: (state) => {
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = sectorListSlice;

export const {
  fetchSectorLoading,
  fetchSectorSuccess,
  fetchSectorFail,
  fetchSingleSectorLoading,
  fetchSingleSectorSuccess,
  fetchSingleSectorFail,
  replySectorLoading,
  replySectorSuccess,
  replySectorFail,
  closeSectorLoading,
  closeSectorSuccess,
  closeSectorFail,
  searchSectors,
  resetResponseMsg,
} = actions;

export default reducer;
