import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import Certifications from '../pages/certifications';
import Showcase from "./showcase";
import Tracer from '../components/tracer';

export default function Navigation({goToSlide}) {
   
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
        <div>
            <nav className="bg-gray-800 p-4 rounded-md max-w-20">
                <div className="container mx-auto flex flex-col items-center py-4">
                    {/* Left section for brand */}


                    {/* Vertical navigation links with icons */}
                    <ul className="flex flex-col space-y-8 cursor-pointer">
                        <li className="flex items-center">
                            
                            <a href="#"  onClick={() =>{ goToSlide('showcase'); }}>
                            <ComputerDesktopIcon className="h-7 w-7 text-white hover:text-blue-300" />
                            </a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <a href="#" onClick={() => {goToSlide('certifications'); }}>
                                <DocumentIcon className="h-7 w-7 text-white hover:text-blue-300" />
                            </a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <BoltIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-gray-300 hover:text-white"></a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <InformationCircleIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-gray-300 hover:text-white"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       
        </>
    );
}
