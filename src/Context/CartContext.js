import axios from "axios";
import { createContext, useEffect, useState } from "react";

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

function onlinePayment(cartId, url, values) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, {
      shippingAddress: values, // Body
    }, {
        headers: headers // Header
    }).then((response)=> response)
    .catch((err) => err);
}

export default function CartContextProvider(props) {

  const [cartId, setCartId] = useState(null);

  async function getCart() {
    let { data } = await getLoggedCart();
    setCartId(data?.data._id);
    // console.log(data?.data._id);
  }

  useEffect(()=> {
    getCart();
  }, [])

  return (
    <CartContext.Provider value={{ cartId, addToCart, getLoggedCart, removeCartItem, updateProductQuantity, onlinePayment, clearCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
