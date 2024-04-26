import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';
import Style from './Home.module.scss';



export default function Home() {


    return <>
        {/* <h1 className={Style.test}>Wego Zien</h1> */}
        <Helmet>
            <meta name='description' content='' />
            <title>WEGO HOME</title>
        </Helmet>

        <MainSlider />
        <CategorySlider />
        <FeaturedProducts />
    </>
}
