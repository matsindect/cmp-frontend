import {
  fetchCategoryLoading,
  fetchCategorySuccess,
  fetchCategoryFail,
  searchCategories,
  fetchSingleCategoryLoading,
  fetchSingleCategorySuccess,
  fetchSingleCategoryFail,
} from "./categoriesSlice";

import {
  getAllCategories,
  getSingleCategory,
} from "../../api/categoryApi";

export const fetchAllCategories = () => async (dispatch) => {
  dispatch(fetchCategoryLoading());
  try {
    const result = await getAllCategories();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchCategorySuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchCategoryFail(error.message));
    
  }
};

export const filterSearchCategory = (str) => (dispatch) => {
  dispatch(searchCategories(str));
};

//Actions for single category only
export const fetchSingleCategory = (_id) => async (dispatch) => {
  dispatch(fetchSingleCategoryLoading());
  try {
    const result = await getSingleCategory(_id);
    dispatch(
      fetchSingleCategorySuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleCategoryFail(error.message));
  }
};

