import React, { useContext } from 'react';
import Style from './Home.module.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { CounterContext } from '../../Context/CounterContext';


export default function Home() {


    let {changeCount} = useContext(CounterContext)
    return <>
        <h2>Home</h2>
        <button className='btn btn-info' onClick={()=> changeCount()}>Change</button>
    </>
}
