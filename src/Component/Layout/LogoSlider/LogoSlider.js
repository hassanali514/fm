import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from '../../../Assets/HomeLogoSlider/logo.jpg'

const LogoSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <Fragment>
            <div className="container services">
                <Slider {...settings}>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                    <div>
                        <div><img style={{ height: '200px', width: '200px' }} src={logo1} /></div>
                    </div>
                </Slider>
            </div>

        </Fragment>
    )
}

export default LogoSlider