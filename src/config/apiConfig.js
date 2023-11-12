import axios from "axios"

export const API_BASE_URL = "https://ecommerce-server-production-065e.up.railway.app"


//http://localhost:5454
const jwt=localStorage.getItem("jwt")

export const api=axios.create({
  baseURL:API_BASE_URL,
  headers:{
    "Authorization":`Bearer ${jwt}`,
    "Content-Type": "application/json"


  }
})
 