import React from 'react'
import Slider from "react-slick";
import "../../styles/home/slider.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function SliderMain() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
        lazyLoad: true,
        arrows: false,
    };

    return (
        <div data-aos="fade-up" className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png" alt="image_slider" />
            </div>
            <div>
              <img src="https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png" alt="image_slider_2" />
            </div>
            <div>
              <img src="https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/April2024/UT_JOGGERRR_desktop.png" alt="image_slider_3" />
            </div>
          </Slider>
        </div>
      );
}

export default SliderMain