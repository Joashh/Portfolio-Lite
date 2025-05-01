import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import { useState } from "react";
import Modal from '../components/modal';
import { motion } from 'framer-motion';

export default function Certifications() {

    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    const handleImageClick = (imgPath) => {
        setSelectedImg(imgPath);
        setShowModal(true);
    };



    return (

        <div className="w-full bg-gray-800 rounded-md max-h-full ">
          
                <div className="bg-gray-800 p-4 space-y-2 h-[calc(100vh-200px)] ">
                    <div className='flex gap-2 2xl:h-full 2xl:px-4'>
                        <div className="w-225 2xl:w-1/2      ">

                            <h1 className="font-bold text-blue-300 text-2xl pb-3 pl-1 2xl:text-4xl 2xl:pb-5">ACKNOWLEDGEMENTS & CERTIFICATIONS</h1>

                            <div className="relative 2xl:h-6/7">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="default-carousel"
                                >
                                    {/* Slide 1 with image */}
                                    <SwiperSlide >
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <img
                                                className="object-cover max-h-[calc(90vh-200px)] 2xl:max-w-200 2xl:max-h-6/7"
                                                src="images/cert1.png"
                                                alt="certificate 1"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 2 with text */}
                                    <SwiperSlide>
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <span className="text-3xl font-semibold text-indigo-600">
                                                <img
                                                    className="object-cover max-h-[calc(90vh-200px) 2xl:w-full 2xl:max-h-6/7]"
                                                    src="images/cert2.png"
                                                    alt="certificate 2"
                                                />
                                            </span>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 3 with text */}
                                    <SwiperSlide>
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <span className="text-3xl font-semibold text-indigo-600 ">

                                                <img
                                                    className=" object-cover max-h-[calc(90vh-200px)] 2xl:w-full 2xl:max-h-6/7]"
                                                    src="images/cert3.png"
                                                    alt="certificate 3"

                                                />

                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <span className="text-3xl font-semibold text-indigo-600">
                                                <img
                                                    className="object-cover max-h-[calc(90vh-200px)] 2xl:w-full"
                                                    src="images/cert4.png"
                                                    alt="certificate 1"
                                                />
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <span className="text-3xl font-semibold text-indigo-600">
                                                <img
                                                    className="object-cover max-h-[calc(90vh-200px)] 2xl:w-full"
                                                    src="images/cert5.png"
                                                    alt="certificate 1"
                                                />
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] flex justify-center items-center 2xl:min-h-full">
                                            <span className="text-3xl font-semibold text-indigo-600">
                                                <img
                                                    className=" object-cover max-h-[calc(90vh-200px)] 2xl:max-h-100 2xl:w-100"
                                                    src="images/cert6.png"
                                                    alt="certificate 1"
                                                />
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
                                    <button className="custom-swiper-button-prev border bg-indigo-600 group p-3 border-indigo-600 w-12 h-12 rounded-full hover:bg-indigo-600 transition-all">
                                        <svg className="h-5 w-5 text-white-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                            <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="custom-swiper-button-next group p-3 border-indigo-600 px-4 bg-indigo-600 w-12 h-12 rounded-full hover:bg-indigo-600 transition-all">
                                        <svg className="h-5 w-5 text-white-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto pt-8 pl-4  2xl:w-full 2xl:pt-20 2xl:pl-13">
                            <div className='flex pl-4'>

                                <img class=" cursor-pointer h-40 rounded-lg 2xl:h-50" src="images/japan.jpg" alt="image description" onClick={() => handleImageClick("images/japan.jpg")} />
                                <h1 className='font-bold pl-6 '>Best Presenter in Research Congress
                                    <p className='font-light text-justify pt-1 w-60 text-sm 2xl:w-90'>Julius received the Best Presenter award among the Computer Science students who participated during college days. </p>
                                </h1>
                            </div>
                            <div className='flex pl-4 pt-4'>

                                <img className="cursor-pointer h-40 min-w-60 rounded-lg 2xl:h-50 2xl:w-75" src="images/cert7.png" alt="image description" onClick={() => handleImageClick("images/cert7.png")}
                                />
                                <h1 className='font-bold pl-6  '>First Copyrighted Mobile Application Developed In-House
                                    <p className='font-light text-justify pt-1 w-60 text-sm 2xl:w-90'>In their third year of college, User's group developed a mobile app for kids that measures their abilities and skills. The app was patented or copyrighted. </p>
                                </h1>
                            </div>
                            <div className='flex pl-4 pt-4'>

                                <img class="h-40 rounded-lg 2xl:h-50 cursor-pointer" src="images/japan.jpg" alt="image description " onClick={() => handleImageClick("images/japan.jpg")} />
                                <h1 className='font-bold pl-6 '>Best Presenter in Research Congress
                                    <p className='font-light text-justify pt-1 w-60 text-sm 2xl:w-90'>Julius received the Best Presenter award among the Computer Science students who participated during college days. </p>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>

                <Modal showModal={showModal} setShowModal={setShowModal} imgsrc={selectedImg} />
                
        </div>

    );
}
