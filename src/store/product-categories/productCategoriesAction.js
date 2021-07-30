import {
  fetchProductCategoryLoading,
  fetchProductCategorySuccess,
  fetchProductCategoryFail,
  searchProductCategories,
  fetchSingleProductCategoryLoading,
  fetchSingleProductCategorySuccess,
  fetchSingleProductCategoryFail,
} from "./productCategoriesSlice";

import {
  getAllProductCategories,
  getSingleProductCategory,
} from "../../api/productCategoryApi";

export const fetchAllProductCategories = () => async (dispatch) => {
  dispatch(fetchProductCategoryLoading());
  try {
    const result = await getAllProductCategories();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchProductCategorySuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchProductCategoryFail(error.message));
    
  }
};

export const filterSearchProductCategory = (str) => (dispatch) => {
  dispatch(searchProductCategories(str));
};

//Actions for single productCategory only
export const fetchSingleProductCategory = (_id) => async (dispatch) => {
  dispatch(fetchSingleProductCategoryLoading());
  try {
    const result = await getSingleProductCategory(_id);
    dispatch(
      fetchSingleProductCategorySuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleProductCategoryFail(error.message));
  }
};

