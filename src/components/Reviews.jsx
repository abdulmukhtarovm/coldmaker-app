import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { getText } from '../locales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    return (
        <div className='Reviews'>
            <div className="titles text-center">
                <h2>{getText("clientsreviews")}</h2>
            </div>
            <div className="container">
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="name">
                                <h4>{getText("reviewT1")}</h4>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon className='chala' icon={faStar} />
                                </span>
                            </div>
                            <p>{getText("reviewP1")}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="myBtn">
                <a href="tel:+998999992727">{getText("leavereview")}</a>
            </div>
        </div>
    )
}

export default Reviews