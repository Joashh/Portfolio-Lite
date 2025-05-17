
import Header from '../components/header.jsx';
import Main from './main.jsx';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

export default function Home({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <> 
        {!isExpanded ? (
            <div className="fixed z-50 flex items-center justify-center bg-gray-950 rounded-lg p-10 shadow-lg w-screen h-screen max-sm:flex-col">
                <img
                    className="h-60 w-60 rounded-full  shadow-[0_0_10px_#00f0ff] hover:shadow-[0_0_20px_#00f0ff] transition-shadow duration-300"
                    src="/images/testprof.jpeg"
                    alt=""
                />
                <div className="flex flex-col pl-7 max-sm:pl-0 max-sm:pt-5 max-sm:items-center max-sm:justify-center max-sm:w-full max-sm:text-center">
    <h1 className="text-white text-3xl font-bold">I'm Julius</h1>
    <p className="text-2xl font-light min-w-100">Software and AI Developer</p>
    
    <TypeAnimation
        className="pt-3 min-h-20 text-justify text-sm font-light min-w-100 max-w-30 max-sm:text-center max-sm:px-4"
        sequence={[
            "You can call me 'Julius' and Welcome to my portfolio — a space where I showcase the projects, skills, and experiences that reflect my journey in tech. Feel free to explore and connect with me. Let’s build something amazing together! 🚀",
            1000,
        ]}
        speed={70}
        wrapper="h1"
        repeat={0}
    />

    <div className="pt-5 gap-3 flex max-sm:flex-row max-sm:items-center">
        <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800"
        onClick={() => setIsExpanded(!isExpanded)}>
            View Portfolio
        </button>
        <button className="bg-gray-700 rounded-md shadow-lg h-10 px-5 font-medium max-sm:text-xs hover:bg-gray-600 active:bg-gray-800">
            Download Resume
        </button>
    </div>
</div>

            </div>
        ) : (

            <div className='flex flex-col h-screen '>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}>

                    <div className=''>
                        <Header />
                    </div>

                </motion.div>

                <div>

                </div>

                <div className='flex flex-1 min-h-0 h-full '>
                    <motion.main
                        className="flex-1 overflow-y-auto min-h-0 h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>

                        {children}

                    </motion.main>
                </div>

            </div>
        )}
        </>
    );
}
