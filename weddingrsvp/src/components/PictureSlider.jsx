import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PictureSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="https://via.placeholder.com/800x400" alt="placeholder"/>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400" alt="placeholder"/>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400" alt="placeholder"/>
            </div>
        </Slider>
    );
};

export default PictureSlider;