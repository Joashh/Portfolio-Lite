import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Quotation() {
    return (
        <div className="flex flex-row  items-center width-full gap-4">
            {/* Column 1: Text */}
            <div className="flex-1 pr-4 min-h-32 max-h-32 bg-gray-800 rounded-md ">
                <h1 className="text-xl text-white text-left leading-relaxed pl-4 pt-4 font-semibold md:text-sm lg:text-lg">
                    "Innovation is not the result of a sudden idea, but the courage to 
                    transform challenges into opportunities and the vision to 
                    create the future from the present."
                </h1>
                <p className='text-gray-500 pl-4 pb-4 pt-2'>- Yours Truly</p>
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
