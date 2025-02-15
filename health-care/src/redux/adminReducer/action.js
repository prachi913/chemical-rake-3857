import axios from "axios"
import { ADMIN_EDIT_PRODUCT_SUCCESS, ADMIN_POST_PRODUCT_SUCCESS, ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS } from "./actionTypes";

export const getProductAdmin=(dispatch)=>{
    dispatch({type:ADMIN_PRODUCT_REQUEST})
    axios
      .get(`https://wild-pink-slug-sock.cyclic.app/multivitamins`)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: ADMIN_PRODUCT_FAILURE });
      });
};

export const editProduct=(obj,id)=>(dispatch)=>{
    dispatch({type:ADMIN_PRODUCT_REQUEST})
    axios
      .patch(`https://wild-pink-slug-sock.cyclic.app/multivitamins/${id}`, obj)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS });
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: ADMIN_PRODUCT_FAILURE });
      });
}


export const postProduct=(dataObj)=>async(dispatch)=>{
    dispatch({type:ADMIN_PRODUCT_REQUEST})
    await axios
      .post(`https://wild-pink-slug-sock.cyclic.app/multivitamins`, dataObj)
      .then((res) => {
        dispatch({ type: ADMIN_POST_PRODUCT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: ADMIN_PRODUCT_FAILURE });
      });
};

export const deleteProduct=(id)=>{
    return axios
      .delete(`https://wild-pink-slug-sock.cyclic.app/multivitamins/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
}