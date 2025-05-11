import Navigation from "../components/navigation";
import Showcase from "../components/showcase";
import Tracer from "../components/tracer";
import Home from "./home";
import React, { useState } from 'react';
import Certifications from './certifications';
import { motion } from "framer-motion";
import Skills from "./skills";
import Projects from "./projects";

export default function Main() {
    const [currentSlide, setCurrentSlide] = useState(0); // State is here now
   
    const goToSlide = (slide) => {
        if (slide === 'showcase') setCurrentSlide(0);
        if (slide === 'certifications') setCurrentSlide(1);
        if (slide === 'skills') setCurrentSlide(2);
        if (slide === 'projects') setCurrentSlide(3);
    };

     const nextslide = () =>
    {
        setCurrentProject(nextslide + 1)
    };

    return (
        <>
        <div className="h-full flex flex-col pl-4 pr-4  pb-5 min-h-0">

            <div className="py-2">
            <Tracer activeSlide={currentSlide} />
            </div>

            <div className="w-full flex gap-4 flex-1 min-h-0 h-full">
                <div className="w-16 flex-shrink-0">
                    <Navigation goToSlide={goToSlide} nextslide={nextslide}/>
                </div>

               
                <div className=" bg-gray-800 rounded-md scrollbar-custom flex-grow overflow-y-auto h-full min-h-0">
                    {currentSlide === 0 && 
                    <motion.div
                    
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}>
                    <Showcase />
                    </motion.div>
                    }
                    {currentSlide === 1 &&
                       
                       <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       transition={{ duration: 0.3 }}
                   >
                            <Certifications />
                    </motion.div>
                    }
                    {currentSlide === 2 &&
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                        <Skills />
                        </motion.div>
                    }
                    {currentSlide === 3 &&
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                        <Projects />
                        </motion.div>
                    }
                </div>
                
            </div>
        </div>
        
        </>
    );
}

Main.layout = (page) => <Home>{page}</Home>;
