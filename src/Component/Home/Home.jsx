import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';
import Style from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../rtx/slices/CounterSlice'
import useNetwork from '../../Hooks/useNetwork';


export default function Home() {

    let x = useNetwork();

    {/* Redux test */}
    let { name } = useSelector((state)=> {
        return state.counterData
    })
    let dispatch = useDispatch()
    dispatch(changeName())
    // console.log(data);

    return <>
        {/* <h1 className={Style.test}>Wego Zien</h1> Sass Test  */}
        <Helmet>
            <meta name='description' content='' />
            <title>WEGO HOME</title>
        </Helmet>
        {/* Redux test */}
        {console.log(`state: ${name}`)}
        {x}
        <MainSlider />
        <CategorySlider />
        <FeaturedProducts />
    </>
}
