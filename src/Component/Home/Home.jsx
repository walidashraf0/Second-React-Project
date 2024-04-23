import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';



export default function Home() {


    return <>

        <Helmet>
            <meta name='description' content='' />
            <title>WEGO Home</title>
        </Helmet>

        <MainSlider />
        <CategorySlider />
        <FeaturedProducts />
    </>
}
