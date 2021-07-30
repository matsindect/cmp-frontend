import {
  fetchServiceLoading,
  fetchServiceSuccess,
  fetchServiceFail,
  searchServices,
  fetchSingleServiceLoading,
  fetchSingleServiceSuccess,
  fetchSingleServiceFail,
} from "./servicesSlice";

import {
  getAllServices,
  getSingleService,
} from "../../api/serviceApi";

export const fetchAllServices = () => async (dispatch) => {
  dispatch(fetchServiceLoading());
  try {
    const result = await getAllServices();
    console.log(result.data.data)
    result.data.data.length &&
      dispatch(fetchServiceSuccess(result.data.data));
  } catch (error) {
    console.log(error)
    dispatch(fetchServiceFail(error.message));
    
  }
};

export const filterSearchService = (str) => (dispatch) => {
  dispatch(searchServices(str));
};

//Actions for single service only
export const fetchSingleService = (_id) => async (dispatch) => {
  dispatch(fetchSingleServiceLoading());
  try {
    const result = await getSingleService(_id);
    dispatch(
      fetchSingleServiceSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleServiceFail(error.message));
  }
};

