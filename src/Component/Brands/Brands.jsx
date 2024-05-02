import React, { useEffect } from 'react';
import Style from './Brands.module.css';
import { BallTriangle } from 'react-loader-spinner';
import { getBrands } from '../../rtx/slices/brandsSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Brands() {

    let { loading, isError, brands } = useSelector((state) => {
        return state.brandsData;
    })


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    return <>
        <h2>Brands</h2>
        {loading ? <div className="loading">
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
        </div> :
            <div className='row'>
                {brands.map((brand) => <div key={brand._id} className="col-md-2">
                    <div className="brand">
                        <img src={brand.image} className='w-100 cursor-pointer' alt="" />
                        <h4 className='h6 my-2'>{brand.name}</h4>
                    </div>
                </div>)}

            </div>}
    </>
}
