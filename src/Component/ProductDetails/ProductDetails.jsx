import React from 'react';
import Style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';



export default function ProductDetails() {

    let params = useParams(); // Get id from URL

    function getProductDetails(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }

    let { isLoading, isError, data } = useQuery('productDetails', ()=> getProductDetails(params.id))
    console.log(data?.data.data);
    


    return <>
    {data?.data.data? <div className='row py-2 align-items-center'>
        <div className="col-md-4">
            <img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
        </div>
        <div className="col-md-8 ">
            <h2 className='h5'>{data?.data.data.title}</h2>
            <p>{data?.data.data.description}</p>

            <h6 className='text-main'>{data?.data.data.category?.name}</h6>
            <h6 className='text-main'>Price {data?.data.data.price} EGP</h6>
            <div className='d-flex justify-content-between'>
                <span>ratingQuantity {data?.data.data.ratingQuantity}</span>
                <span><i className='fa fa-star rating-color'>{data?.data.data.ratingAverage}</i></span>
            </div>

            <button className='btn bg-main text-white w-100 mt-2'>Add To Cart</button>

        </div>


    </div> : ''}
    <h2>ProductDetails</h2>
    </>
}
