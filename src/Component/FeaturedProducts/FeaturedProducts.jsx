import React, { useEffect, useState } from 'react';
import Style from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner';


export default function FeaturedProducts() {

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
    console.log();

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
                {data?.data.data.map((product) => <div key={product.id} className="col-md-2 gy-4">
                    <div className="product p-2">
                    <img src={product.imageCover} className='w-100' alt={product.title} />
                    <h2 className='font-sm text-main fw-bold'>{product.category.name}</h2>
                    <h2 className='h5 fw-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                    <div className="d-flex justify-content-between mt-3">
                        <span>{product.price} EGP</span>
                        <span>
                            <i className="fas fa-star rating-color"></i>
                            {product.ratingsAverage}</span>
                    </div>

                    <button className='btn bg-main text-white w-100 btn-sm mt-2'>Add To Cart</button>
                    </div>
                </div>)}
            </div>
        </div>}

    </>
}
