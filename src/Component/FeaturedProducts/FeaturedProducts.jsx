import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';




export default function FeaturedProducts() {

    let { addToCart } = useContext(CartContext);

    async function addProductToCart(id) {
        let response = await addToCart(id);
        if (response.data.status === 'success') {
            toast.success('Product is added successfully', {
                duration: 4000,
                position: 'top-center'
            })
        } else {
            toast.error('Error adding product to cart')
        }
        console.log(response);
    }

    function getFeaturedProducts() {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }

    let { isLoading, isError, data, isFetching, refetch } = useQuery('featuredProducts', getFeaturedProducts, {
        // cacheTime: 3000,
        // refetchOnMount: false,
        // staleTime: 30000,
        // refetchInterval: 3000,
        // enabled: false
    });

    // const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    // async function getFeaturedProducts() {
    //     let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    //     setFeaturedProducts(data.data)
    // }

    // useEffect(()=> {
    //     getFeaturedProducts()
    // }, [])

    return <>
        {isLoading ? <div className="w-100 d-flex justify-content-center py-5">
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
        </div> : <div className="container py-2">
            {/* <button className='btn bg-main text-white w-100' onClick={()=> refetch()}>Get Products</button> */}
            <h2>Featured Products</h2>
            <div className="row">
                {data?.data.data.map((product) => <div key={product.id} className="col-md-2">
                    <div className="product p-2 cursor-pointer py-3 px-2">
                        <Link to={`/productdetails/${product.id}`}>
                            <img src={product.imageCover} className='w-100' alt={product.title} />
                            <span className='font-sm text-main fw-bolder'>{product.category.name}</span>
                            <h3 className='h6'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                            <div className="d-flex justify-content-between mt-3">
                                <span>{product.price} EGP</span>
                                <span>
                                    <i className="fas fa-star rating-color"></i>
                                    {product.ratingsAverage}</span>
                            </div>
                        </Link>
                        <button onClick={() => addProductToCart(product.id)} className='btn bg-main text-white w-100 btn-sm mt-2'>Add To Cart</button>
                    </div>
                </div>)}
            </div>
        </div>}

    </>
}
