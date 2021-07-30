import {
  fetchBusinessLoading,
  fetchBusinessSuccess,
  fetchBusinessFail,
  searchBusinesss,
  fetchSingleBusinessLoading,
  fetchSingleBusinessSuccess,
  fetchSingleBusinessFail,
} from "./businessSlice";

import {
  getAllBusinesss,
  getSingleBusiness,
} from "../../api/businessApi";

export const fetchAllBusinesss = () => async (dispatch) => {
  dispatch(fetchBusinessLoading());
  try {
    const result = await getAllBusinesss();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchBusinessSuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchBusinessFail(error.message));
    
  }
};

export const filterSearchBusiness = (str) => (dispatch) => {
  dispatch(searchBusinesss(str));
};

//Actions for single business only
export const fetchSingleBusiness = (_id) => async (dispatch) => {
  dispatch(fetchSingleBusinessLoading());
  try {
    const result = await getSingleBusiness(_id);
    dispatch(
      fetchSingleBusinessSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleBusinessFail(error.message));
  }
};

