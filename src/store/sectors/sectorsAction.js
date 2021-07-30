import {
  fetchSectorLoading,
  fetchSectorSuccess,
  fetchSectorFail,
  searchSectors,
  fetchSingleSectorLoading,
  fetchSingleSectorSuccess,
  fetchSingleSectorFail,
} from "./sectorsSlice";

import {
  getAllSectors,
  getSingleSector,
} from "../../api/sectorApi";

export const fetchAllSectors = () => async (dispatch) => {
  dispatch(fetchSectorLoading());
  try {
    const result = await getAllSectors();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchSectorSuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchSectorFail(error.message));
    
  }
};

export const filterSearchSector = (str) => (dispatch) => {
  dispatch(searchSectors(str));
};

//Actions for single sector only
export const fetchSingleSector = (_id) => async (dispatch) => {
  dispatch(fetchSingleSectorLoading());
  try {
    const result = await getSingleSector(_id);
    dispatch(
      fetchSingleSectorSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleSectorFail(error.message));
  }
};

