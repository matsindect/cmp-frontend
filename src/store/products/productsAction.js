import {
  fetchProductLoading,
  fetchProductSuccess,
  fetchProductFail,
  searchProducts,
  fetchSingleProductLoading,
  fetchSingleProductSuccess,
  fetchSingleProductFail,
} from "./productsSlice";

import {
  getAllProducts,
  getSingleProduct,
} from "../../api/productApi";

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(fetchProductLoading());
  try {
    const result = await getAllProducts();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchProductSuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchProductFail(error.message));
    
  }
};

export const filterSearchProduct = (str) => (dispatch) => {
  dispatch(searchProducts(str));
};

//Actions for single product only
export const fetchSingleProduct = (_id) => async (dispatch) => {
  dispatch(fetchSingleProductLoading());
  try {
    const result = await getSingleProduct(_id);
    dispatch(
      fetchSingleProductSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleProductFail(error.message));
  }
};

