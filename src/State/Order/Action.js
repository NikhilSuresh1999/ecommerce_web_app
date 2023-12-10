import axios from "axios";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"
import { API_BASE_URL, api } from "../../config/apiConfig";




export const createOrder = (reqData)=> async(dispatch)=>{
  dispatch({type:CREATE_ORDER_REQUEST});

  try{
  

    const {data} = await api.post(`/api/orders/`,reqData.address,
   
    );
    if(data.id)
    {
      reqData.navigate({ search: `step=3&order_id=${data.id}`});
    }
    console.log("created order ",data);
    dispatch({
      type:CREATE_ORDER_SUCCESS,
      payload:data,
    });
  }catch(error){
    console.log("catch error ",error);
    dispatch({
      type:CREATE_ORDER_FAILURE,
      payload: error.message,
    });


  }
};



export const getOrderById = (orderId)=> async(dispatch)=>{
  dispatch({type:GET_ORDER_BY_ID_REQUEST});

  try{
  

    const {data} = await api.get(`/api/orders/${orderId}`,
   
    );
   
    console.log("order by id ",data);
    dispatch({
      type:GET_ORDER_BY_ID_SUCCESS,
      payload:data,
    });
  }catch(error){
    console.log("catch error ",error);
    dispatch({
      type:GET_ORDER_BY_ID_FAILURE,
      payload: error.message,
    });


  }
};


export const usersOrderHistory = ()=> async(dispatch)=>{
  dispatch({type:GET_ORDER_HISTORY_REQUEST});

  try{
  

    const {data} = await api.get(`/api/orders/user`,
   
    );
   
    console.log("order by user ",data);
    dispatch({
      type:GET_ORDER_HISTORY_SUCCESS,
      payload:data,
    });
  }catch(error){
    console.log("catch error ",error);
    dispatch({
      type:GET_ORDER_HISTORY_FAILURE,
      payload: error.message,
    });


  }
};