import axios from "axios";
import { apiUrl } from "./apiUrl";
const rootUrl = apiUrl;
const loginUrl = rootUrl + "/users/login";
const userProfileUrl = rootUrl + "/users/signup";
const logoutUrl = rootUrl + "/user/logout";
const newAccessJWT = rootUrl + "tokens";
const userVerificationUrl = userProfileUrl + "/verify";

export const userRegistration = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(userProfileUrl, frmData);

      console.log(res);
      
      resolve(res.data);

      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const userRegistrationVerification = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(userVerificationUrl, frmData);

      resolve(res.data);
      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject({ status: "error", message: error.error });
    }
  });
};

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        loginUrl, 
        frmData, 
        {
          mode: 'no-cors', 
          headers:{
            'Access-Control-Allow-Origin': '*',
            "Content-Type" : "application/json"
          }
        }
      );
      
      resolve(res.data);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.access_token);
        localStorage.setItem(
          "cmpSite",
          JSON.stringify({ refreshJWT: res.data.access_token })
        );
        
      }
    } catch (error) {
      reject(error.response);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });

      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("cmpSite"));

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("cmpSite");
      }

      reject(false);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
