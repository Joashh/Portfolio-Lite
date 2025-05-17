import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Skills() {

    return (
        <div className="flex-col flex-grow max-w-full h-[calc(100vh-200px)]  2xl:pt-12 2xl:pb-1" >
            <h1 className="font-bold text-3xl pl-6 pt-3 2xl:pl-16 2xl:text-5xl">SKILLS AND EXPERIENCE</h1>
            <div className="flex  justify-center max-h-full ">

                <div className="flex-col 2xl:pt-5 max-w-full">
                    <div className="flex gap-6 p-6 pb-2 pt-3 2xl:p-3 ">


                        <div className="bg-teal-700  min-w-100 rounded-md transition-colors duration-300   hover:bg-transparent hover:border-2 max-w-120 max-h-80  shadow-lg 2xl:min-w-150 2xl:min-h-80">

                            <div className="flex">
                                <div className='w-1/2 pl-4 max-h-50 pt-4 2xl:p-4 '>
                                    <DotLottieReact
                                        src="images/languages.json"
                                        loop
                                        autoplay

                                    />
                                </div>

                                <div className='w-1/2 pr-6'>
                                    <h1 className="p-4 pb-1 font-bold text-xl 2xl:text-3xl">PROGRAMMING LANGUAGES & STRUCTURES</h1>
                                    <div className="flex">
                                        <div className="align-center">

                                        </div>
                                        <div>

                                            <p className="p-4 pt-0 text-sm text-justify 2xl:text-xl">Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                                                Basic: Prolog, PHP, ANTLR, and JavaScript
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-700  transition-colors duration-300 min-w-100  hover:bg-transparent hover:border-2  rounded-md max-w-120 max-h-100 min-h-60 shadow-lg 2xl:min-w-150 2xl:min-h-80">
                            <div className="flex ">
                            
                                <div className='pt-5 w-1/2'>
                                    <DotLottieReact
                                        src="images/tools.json"
                                        loop
                                        autoplay

                                    />
                                </div>

                                <div className='w-1/2 pr-6'>
                                    <h1 className="p-4 pb-1 font-bold text-xl 2xl:text-3xl">TOOLS AND PLATFORMS USED</h1>
                                    <p className="p-4 pt-0 text-sm text-justify 2xl:text-xl">Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                                        Basic: Prolog, PHP, ANTLR, and JavaScript
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-teal-700  transition-colors duration-300   hover:bg-transparent hover:border-1 rounded-md max-w-120 min-w-100 max-h-100 min-h-60 shadow-lg 2xl:min-w-150 2xl:min-h-80">
                            <div className='flex'>

                                <div className='w-1/2 2xl:pt-6'>
                                    <DotLottieReact

                                        src="images/AI.json"
                                        loop
                                        autoplay
                                    />
                                </div>

                                <div className='w-1/2 pr-6 '>
                                    <h1 className="p-4 pb-1 font-bold text-xl 2xl:text-3xl">MACHINE/DEEP LEARNING MODEL USED</h1>
                                    <p className="p-4 pt-0 text-sm text-justify 2xl:text-xl ">Advance: Python, Java, C#, SQL, Arduino and Simulator Languages, and HTML & CSS
                                        Basic: Prolog, PHP, ANTLR, and JavaScript
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="flex gap-x-6 p-6 pt-2 2xl:p-3 max-h-65  ">
                        <div className="bg-yellow-700  transition-colors duration-300   hover:bg-transparent hover:border-2 rounded-md max-w-115 max-h-100 min-h-50 shadow-lg min-w-115 2xl:min-w-150 2xl:min-h-80 2xl:max-h-80">
                            <div className="flex max-h-60">
                                <div className="w-1/2 flex items-center justify-center ">
                                    <DotLottieReact
                                        src="images/award.json"
                                        loop
                                        autoplay
                                        
                                    />
                                </div>
                                <div className="w-1/2 pt-0 p-4 2xl:pr-10">
                                    <h1 className="font-bold text-xl 2xl:text-3xl pt-2 pb-2">TECHNICAL SKILLS</h1>
                                    <p className="text-justify pt-0 text-xs 2xl:text-md">
                                        Machine Learning, Deep Learning, and Reinforcement Learning. Laravel, React JSX, Filament, WordPress, Google Sites, Apps Script.
                                        <br />
                                        Desktop Application Development, Basic Networking Systems, Simulations.
                                        <br />
                                        Custom Programming, Association Rule Mining, Basic Clustering, Advanced Computer Tasks, Documentation.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="bg-yellow-700  transition-colors duration-300   hover:bg-transparent hover:border-2 min-w-115 rounded-md max-w-115 max-h-100 shadow-lg 2xl:min-w-150 2xl:min-h-80">

                            <div className='flex'>
                                <div className=' flex flex-col justify-center w-1/2 '>

                                    <DotLottieReact
                                        src="images/participation.json"
                                        loop
                                        autoplay
                                        className=''

                                    />
                                </div>
                                <div className='w-1/2'>
                                    <h1 className="p-4  pb-1 font-bold text-xl 2xl:text-3xl 2xl:pt-6 ">PARTICIPATIONS</h1>
                                    <p className="p-4 text-justify  2xl:text-xl 2xl:pr-10 pr-10">
                                        Competetions: Local Codewars, iSite IT Quizbee, Research Congress
                                        Program Globally: TOPCIT 2024, TOPCIT 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-700  transition-colors duration-300  hover:bg-transparent hover:border-2 min-w-115 rounded-md max-w-115 max-h-100 shadow-lg 2xl:min-w-150 2xl:min-h-80">


                            <div className='flex'>
                                <div className='flex-col justify-center w-1/2 max-h-59 min-h-55 '>
                                    <DotLottieReact
                                        src="images/awards2.json"
                                        loop
                                        autoplay
                                        className=''

                                    />

                                </div>
                                <div className='w-1/2'>
                                    <h1 className="p-4 pb-1 pr-10 font-bold text-xl 2xl:text-2xl 2xl:pr-10 2xl:pt-10 ">AWARDS</h1>
                                    <p className="p-4 pt-0 pr-10 text-justify 2xl:text-xl 2xl:pr-10">
                                        Best Presenter in Research Congress 2025
                                        <br></br>
                                        Dean's Lister 2021-2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}