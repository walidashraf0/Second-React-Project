import React from 'react';
import Style from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, decrease, increase, increaseByAmount } from '../../rtx/slices/CounterSlice';


export default function Products(props) {

    let { counter, userName } = useSelector((state) => {
        return state.counterData
    })
    const dispatch = useDispatch();
    
    console.log(props);
    
    return <>
    <h2>Products</h2>
    <h3>UserName: {userName}</h3>
    <h3>Count: {counter}</h3>

    <button onClick={()=> dispatch(increaseByAmount(30))} className='btn btn-info mx-1'>increaseByAmount Counter</button>
    <button onClick={()=> dispatch(increase())} className='btn btn-info mx-1'>Increase Counter</button>
    <button onClick={()=> dispatch(decrease())} className='btn btn-info mx-1'>Decrease Counter</button>
    <button onClick={()=> dispatch(changeName())} className='btn btn-info'>Change Name</button>
    </>
}
