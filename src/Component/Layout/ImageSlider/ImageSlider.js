import { Carousel } from "react-bootstrap";
import React, { Fragment } from "react";
import slider1 from '../../../Assets/HomeCarousel/slider1.jpg'
import slider2 from '../../../Assets/HomeCarousel/slider2.jpeg'
import slider3 from '../../../Assets/HomeCarousel/slider3.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';


const ImageSlider = () => {
    return (
        <Fragment>
            <div className="home-slider">
                <Carousel interval={3000} pause={false}>
                    <Carousel.Item>
                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'><h3>IBRAHIM AL NABOODAH HR CONSULTANCY</h3></div>
                                    <div className='col-lg-12'><p>has come a long way starting with 1 company started in October 2001 and by achieving dynamic growth and success along the way has over 50 various companies. As Chairman I'm focused on continuing the legacy and to build on our heritage with the underlying ethos of Credibility, Integrity, Collaboration, Accountability, Respect, Excellence and Diversity.</p></div>
                                    <div className='col-lg-12'>
                                        <button>Our Story <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'><h3>One Brand, One Team, One Vision</h3></div>
                                    <div className='col-lg-12'><p>Saif Belhasa Holding’s vision is to be as a responsible, reliable and respectable business conglomerate and to be the partner of choice for international and regional corporations. Our vision aspires to achieve sustainable exponential and dynamic growth for the entire group.</p></div>
                                    <div className='col-lg-12'>
                                        <button>Read More <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slider2}
                                alt="Second slide"
                            />

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="items-parent-class">

                            <div className='container carouselOverlay'>
                                <div className='row col-lg-8'>
                                    <div className='col-lg-12'>Diversified Business</div>
                                    <div className='col-lg-12'>Saif Belhasa Holding is a diversified business with multiple sectors under its portfolio, Each business division of Saif Belhasa holding follow responsible business practices with intelligent diversification to achieve strong, sustainable growth and to provide flexible customer solutions through its portfolio.</div>
                                    <div className='col-lg-12'>
                                        <button>View All Sectors <AiOutlineArrowRight /></button>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="d-block w-100"
                                src={slider3}
                                alt="Third slide"
                            />

                        </div>

                    </Carousel.Item>

                </Carousel>
            </div>
        </Fragment>
    )
}

export default ImageSlider