import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


export default function Quotation() {
    return (
        <div className="flex flex-row  items-center width-full gap-4">
            {/* Column 1: Text */}
            <div className="flex-1 pr-4 min-h-32 max-h-32 bg-gray-800 rounded-md ">
                <div className='text-md text-blue-200 text-left leading-relaxed pl-4 pt-4 font-semibold 2xl:pt-2 2xl:text-2xl'>
                <TypeAnimation
                    sequence={[
                        "Hi! I'm a developer and programmer with a passion for Intelligent Systems. I've had the privilege of working on some impactful projects and would love to share my achievements so far.",
                        1000, // optional pause at end
                    ]}
                    speed={50}
                    wrapper="h1"
                
                    repeat={0}
                />
                </div>
                <p className='text-gray-500 pl-4 pb-4 pt-2 2xl:text-xl 2xl:pt-0'>My mission is to make a positive
                    impact on the world through
                    innovative computer science
                    projects.</p>
            </div>

            {/* Column 2: Icons */}
            <div className="flex flex-col items-center justify-center space-y-4 min-h-32 max-h-32 bg-gray-800 rounded-md max-w-15 w-full">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-6 w-6 text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-6 w-6 text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-600" />
                </a>
            </div>
        </div>
    );
}
