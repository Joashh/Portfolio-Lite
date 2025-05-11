import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon, BuildingOffice2Icon, ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navigation({ goToSlide}) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = (value) => {
        setIsVisible(value);
    }
    
   

    return (
        <>
        
            <div className='h-full flex flex-col '>
                <nav className="bg-gray-800 p-4 rounded-md max-w-20">
                    <div className="container mx-auto flex flex-col items-center py-4">
                        {/* Left section for brand */}


                        {/* Vertical navigation links with icons */}
                        <ul className="flex flex-col space-y-8 cursor-pointer">
                            <li className="flex items-center">

                                <a href="#" onClick={() => { goToSlide('showcase'); toggleVisibility(false); }}>
                                    <BuildingOffice2Icon className="h-7 w-7 text-white hover:text-blue-300" />
                                </a>
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <a href="#" onClick={() => { goToSlide('certifications'); toggleVisibility(false); }}>
                                    <DocumentIcon className="h-7 w-7 text-white hover:text-blue-300" />
                                </a>
                            </li>
                            <li className="flex items-center cursor-pointer">
                                <a href="#" onClick={() => { goToSlide('skills'); toggleVisibility(false); }}>
                                    <BoltIcon className="h-7 w-7 text-white hover:text-blue-300" />
                                </a>
                            </li>
                            <li className="flex items-center cursor-pointer">

                                <a href="#" onClick={() => { goToSlide('projects'); toggleVisibility(true); }} className="text-gray-300 hover:text-white">
                                    <ComputerDesktopIcon className="h-7 w-7 text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            className="flex flex-col items-center justify-center mt-auto gap-3 pb-5"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}>

                            <button
                                className="bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                                onClick={() => {
                                    goToSlide('home');
                                }}
                            >
                                <ArrowUpCircleIcon className="h-8 w-8 text-white hover:text-blue-300" />
                            </button>
                            <button
                                className="bg-gray-800 w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 active:bg-gray-900 flex items-center justify-center"
                                onClick={() => {
                                    goToSlide('home');
                                }}
                            >
                                <ArrowDownCircleIcon className="h-8 w-8 text-white hover:text-blue-300" />
                            </button>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
