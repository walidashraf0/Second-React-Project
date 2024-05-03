import React, { useContext, useEffect, useState } from 'react';
import Style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useNetwork from '../../Hooks/useNetwork';


export default function Cart() {

    let x = useNetwork();

    let { getLoggedCart, removeCartItem, updateProductQuantity, clearCartItems } = useContext(CartContext);
    const [cartDetails, setCartDetails] = useState(null)

    async function updateCount(id, count) {
        let { data } = await updateProductQuantity(id, count)
        setCartDetails(data);
    }

    async function clearCart() {
        let { data } = await clearCartItems();
        console.log(data);
        // setCartDetails(data);
    }

    async function removeItem(id) {
        let { data } = await removeCartItem(id);
        setCartDetails(data);
    }

    async function getCart() {
        let { data } = await getLoggedCart();
        setCartDetails(data);
        console.log(data);
    }

    useEffect(()=> {
        getCart();
    }, [])



    return <>
    {cartDetails? <div className="w-75 my-2 mx-auto p-3 bg-main-light">
        <h2>Cart</h2>
        <h3>Shopping Cart</h3>
        <h4 className='h text-main fw-bolder'>Cart Items: {cartDetails.numOfCartItems}</h4>
        <h4 className='h6 text-main fw-bolder mb-4'>Total Cart Price: {cartDetails.data.totalCartPrice} EGP</h4>
        {cartDetails.data.products.map((product)=> <div key={product.product.id} className='row border-bottom py-2 px-2'>
            <div className="col-md-1">
                <img className='w-100' src={product.product.imageCover} alt="" />
            </div>
            <div className="col-md-11">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="h6">{product.product.title.split(' ').slice(0, 3).join(' ')}</h3>
                        <h6 className='text-main'>Price: {product.price} EGP</h6>
                    </div>
                    <div>
                        <button onClick={()=> updateCount(product.product.id, product.count + 1)} className='btn brdr-main p-1'>+</button>
                        <span className='mx-2'>{product.count}</span>
                        <button onClick={()=> updateCount(product.product.id, product.count - 1)} className='btn brdr-main p-1'>-</button>
                    </div>
                </div>
                <button onClick={()=> removeItem(product.product.id)} className='btn p-0'><i className='fas fa-trash text-danger font-sm'></i> Remove</button>

            </div>
        </div>)}

        <Link to={"/address"} className='btn bg-main m-3 w-25 text-white'>Online Payment</Link>
        <button className='btn bg-main m-3 w-25 text-white'>Cash On Delivery</button>
                <button onClick={()=> clearCart()} className='btn p-0'><i className='fas fa-trash text-danger font-sm'></i> Clear</button>
    </div>: <section id='loading' className='d-flex justify-content-center align-items-center'>
        <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            </section>}
            {x}
    </>
}
