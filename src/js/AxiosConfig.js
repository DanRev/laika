import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/api"  ;

export const getProducts = async function () {
  const response = await axios.get("/products");
  return response.data.products;
};
