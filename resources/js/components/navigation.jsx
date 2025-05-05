import { HomeIcon, InformationCircleIcon, BoltIcon, ComputerDesktopIcon, DocumentIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Navigation({goToSlide}) {
   

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
                            <BuildingOffice2Icon className="h-7 w-7 text-white hover:text-blue-300" />
                            </a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <a href="#" onClick={() => {goToSlide('certifications'); }}>
                                <DocumentIcon className="h-7 w-7 text-white hover:text-blue-300" />
                            </a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                        <a href="#" onClick={() => {goToSlide('skills'); }}>
                            <BoltIcon className="h-7 w-7 text-white hover:text-blue-300" />
                            </a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <ComputerDesktopIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-gray-300 hover:text-white"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
       
        </>
    );
}
