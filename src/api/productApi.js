import axios from "axios";
import { apiUrl } from "./apiUrl";

const rootUrl = apiUrl + "/products";

export const getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl, {
        mode: 'no-cors',
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleProduct = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
