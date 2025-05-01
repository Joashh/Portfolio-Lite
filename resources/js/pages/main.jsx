import Navigation from "../components/navigation";
import Showcase from "../components/showcase";
import Tracer from "../components/tracer";
import Home from "./home";
import React, { useState } from 'react';
import Certifications from './certifications'; 

export default function Main() {
    const [currentSlide, setCurrentSlide] = useState('showcase'); // State is here now
    const goToSlide = (slide) => setCurrentSlide(slide);

    return (
        <div className="pl-4 pr-4">
            <div className="py-2">
                <Tracer />
            </div>
            <div className="w-full flex gap-4 flex-1">
                <div className="w-16 flex-shrink-0">
                    <Navigation goToSlide={goToSlide}/>
                </div>

                <div className="bg-gray-800 rounded-md scrollbar-custom flex-grow overflow-y-auto max-h-[calc(100vh-200px)]">
                    {currentSlide === 'showcase' && <Showcase />}
                    {currentSlide === 'certifications' && <Certifications />}
                </div>
            </div>
        </div>
    );
}

Main.layout = (page) => <Home>{page}</Home>;
