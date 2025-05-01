import { ShareIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon} from '@heroicons/react/24/solid';
export default function Showcase() {
    return (
        <div className="bg-gray-800 rounded-md max-h-full">
            <div className="bg-gray-800 p-4 space-y-6  max-h-[calc(100vh-200px)]">
                {/* Item 1 */}
                <div id="ITEM 1">
                    <div className="flex items-center gap-4">
                        {/* Image on the right */}
                        <img
                            className="rounded-lg w-100 h-100 object-cover"
                            src="/storage/wallpaper.png"
                            alt="Showcase"
                        />

                        {/* Description on the left */}
                        <div>
                            <div className="text-2xl font-bold text-sky-500 pt-1 pl-4">
                                College of Public Affairs and Development
                            </div>
                            <div className="mt-1 font-bold text-white text-xl pl-4">
                                <a href="#" className="hover:underline">Internship</a>
                            </div>
                            <div className="mt-2 text-s text-gray-300 text-justify p-4">
                                During my internship, I had the opportunity to apply the knowledge and skills I gained in the classroom to real-world scenarios. I was immersed in a dynamic work environment where I collaborated with professionals, tackled meaningful projects, and gained hands-on experience in my field.

                                This experience not only sharpened my technical abilities but also helped me develop soft skills such as communication, time management, and problem-solving. I learned how to work as part of a team, adapt to new challenges, and take initiative in contributing to tasks that made an impact.

                                Overall, my internship was a transformative part of my academic journey, providing valuable insights into industry practices and solidifying my passion for the career path I’ve chosen.
                            </div>
                            <div className="pl-4 flex gap-4">
                                <button className="btn-primary">Documentation</button>
                                <button > <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div id="ITEM 2">
                    <div className="flex items-center gap-4 pb-4">
                        {/* Image on the right */}
                        <img
                            className="rounded-lg w-100 h-100 object-cover"
                            src="/storage/japan.jpg"
                            alt="Showcase"
                        />

                        {/* Description on the left */}
                        <div>
                            <div className="text-2xl font-bold text-sky-500 pt-1 pl-4">
                                Laguna State Polytechnic University
                            </div>
                            <div className="mt-1 font-bold text-white text-xl pl-4">
                                <a href="#" className="hover:underline">Computer Science - Major in Intelligent Systems</a>
                            </div>
                            <div className="mt-2 text-s text-gray-300 text-justify p-4">
                            Pursuing a Master’s degree was an enriching and transformative journey that allowed me to delve deeper into my field of study and sharpen my research skills. I embarked on this academic path with the goal of expanding my knowledge, developing critical thinking abilities, and gaining practical experience that would be applicable in both academic and professional environments.
                                </div>
                            <div className="pl-4 flex gap-4">
                                <button className="btn-primary">Documentation</button>
                                <button > <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                            </div>

                        </div>

                        
                    </div>
                    
                </div>

                <div id="ITEM 2">
                    <div className="flex items-center gap-4 pb-4">
                        {/* Image on the right */}
                        <img
                            className="rounded-lg w-100 h-100 object-cover"
                            src="/storage/japan.jpg"
                            alt="Showcase"
                        />

                        {/* Description on the left */}
                        <div>
                            <div className="text-2xl font-bold text-sky-500 pt-1 pl-4">
                                Los Banos Senior High School
                            </div>
                            <div className="mt-1 font-bold text-white text-xl pl-4">
                                <a href="#" className="hover:underline">STEM Track</a>
                            </div>
                            <div className="mt-2 text-s text-gray-300 text-justify p-4">
                            Pursuing a Master’s degree was an enriching and transformative journey that allowed me to delve deeper into my field of study and sharpen my research skills. I embarked on this academic path with the goal of expanding my knowledge, developing critical thinking abilities, and gaining practical experience that would be applicable in both academic and professional environments.
                                </div>
                            <div className="pl-4 flex gap-4">
                                <button className="btn-primary">Documentation</button>
                                <button > <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                            </div>

                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
