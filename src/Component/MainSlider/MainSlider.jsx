import React from 'react';
import Style from './MainSlider.module.css';
import Slider from "react-slick";
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'
import blog1 from '../../Assets/images/grocery-banner-2.jpeg'
import blog2 from '../../Assets/images/grocery-banner.png'


export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return <>

        <div className="row gx-0">
            <div className="col-md-9">
                <Slider {...settings}>
                    <img height={400} src={slide1} className='w-100' alt="ay7aga" />
                    <img height={400} src={slide2} className='w-100' alt="ay7aga" />
                    <img height={400} src={slide3} className='w-100' alt="ay7aga" />
                </Slider>
            </div>
            <div className="col-md-3">
                <img height={200} src={blog1} className='w-100' alt="ay7aga" />
                <img height={200} src={blog2} className='w-100' alt="ay7aga" />
            </div>
        </div>
    </>
}
