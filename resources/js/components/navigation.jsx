import { HomeIcon, InformationCircleIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function Navigation() {
    return (
        <div>
            <nav className="bg-gray-800 p-4 rounded-md max-w-20">
                <div className="container mx-auto flex flex-col items-center py-4">
                    {/* Left section for brand */}
                    

                    {/* Vertical navigation links with icons */}
                    <ul className="flex flex-col space-y-8 cursor-pointer">
                        <li className="flex items-center">
                            <HomeIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-black hover:text-white"></a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <InformationCircleIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-black hover:text-white "></a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <BriefcaseIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-gray-300 hover:text-white"></a>
                        </li>
                        <li className="flex items-center cursor-pointer">
                            <PhoneIcon className="h-7 w-7 text-white" />
                            <a href="#" className="text-gray-300 hover:text-white"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
