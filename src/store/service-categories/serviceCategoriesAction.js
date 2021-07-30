import {
  fetchServiceCategoryLoading,
  fetchServiceCategorySuccess,
  fetchServiceCategoryFail,
  searchServiceCategories,
  fetchSingleServiceCategoryLoading,
  fetchSingleServiceCategorySuccess,
  fetchSingleServiceCategoryFail,
} from "./serviceCategoriesSlice";

import {
  getAllServiceCategories,
  getSingleServiceCategory,
} from "../../api/serviceCategoryApi";

export const fetchAllServiceCategories = () => async (dispatch) => {
  dispatch(fetchServiceCategoryLoading());
  try {
    const result = await getAllServiceCategories();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchServiceCategorySuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchServiceCategoryFail(error.message));
    
  }
};

export const filterSearchServiceCategory = (str) => (dispatch) => {
  dispatch(searchServiceCategories(str));
};

//Actions for single serviceCategory only
export const fetchSingleServiceCategory = (_id) => async (dispatch) => {
  dispatch(fetchSingleServiceCategoryLoading());
  try {
    const result = await getSingleServiceCategory(_id);
    dispatch(
      fetchSingleServiceCategorySuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleServiceCategoryFail(error.message));
  }
};

