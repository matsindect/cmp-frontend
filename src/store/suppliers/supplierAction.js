import {
  fetchSupplierLoading,
  fetchSupplierSuccess,
  fetchSupplierFail,
  searchSuppliers,
  fetchSingleSupplierLoading,
  fetchSingleSupplierSuccess,
  fetchSingleSupplierFail,
} from "./supplierSlice";

import {
  getAllSuppliers,
  getSingleSupplier,
} from "../../api/supplierApi";

export const fetchAllSuppliers = () => async (dispatch) => {
  dispatch(fetchSupplierLoading());
  try {
    const result = await getAllSuppliers();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchSupplierSuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchSupplierFail(error.message));
    
  }
};

export const filterSearchSupplier = (str) => (dispatch) => {
  dispatch(searchSuppliers(str));
};

//Actions for single supplier only
export const fetchSingleSupplier = (_id) => async (dispatch) => {
  dispatch(fetchSingleSupplierLoading());
  try {
    const result = await getSingleSupplier(_id);
    dispatch(
      fetchSingleSupplierSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleSupplierFail(error.message));
  }
};

