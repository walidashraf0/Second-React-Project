import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();

let userToken = localStorage.getItem("userToken");
let headers = {
  token: userToken,
};

async function addToCart(id) {
  return await axios
    .post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id, //Body
      },
      {
        headers: headers, //Headers
      }
    )
    .then((response) => response)
    .catch((error) => error);
}

function getLoggedCart() {
  return axios
    .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: headers, //Headers
    })
    .then((response) => response)
    .catch((err) => err);
}

function clearCartItems() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers, //Headers
    }).then((response)=> response)
    .catch((err) => err);
}

function removeCartItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers: headers, //Headers
    }).then((response)=> response)
    .catch((err) => err);
}

function updateProductQuantity(productId, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        count: count, // Body
    }, {
        headers: headers // Header
    }).then((response)=> response)
    .catch((err) => err);
}

export default function CartContextProvider(props) {
  return (
    <CartContext.Provider value={{ addToCart, getLoggedCart, removeCartItem, updateProductQuantity, clearCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
