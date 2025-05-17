import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Projects({ currentProject, setCurrentProject }) {
    const projects = [
        {
            image: "images/dysg.png",
            title: "Potential Dysgraphia Detection Tool (Prototype)",
            description:
                "I developed and trained a model that can detect potential dysgraphia using handwriting as input. The model assesses features such as stroke patterns, character recognition, and letter alignment. It was created using PyTesseract and other machine learning techniques. The model currently achieves 65% accuracy, which is constrained by the limitations of the available dataset.",
            githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
        },
        {
            image: "images/cpaf.jpg",
            title: "Intranet System College of Public Affairs and Development - UPLB",
            description: "I created a web-based intranet system using Filament in Laravel. The system is designed to manage the college's documents such as researchers, training organizes, awards, and other important documents. The system is designed to be user-friendly and efficient, allowing users to easily access and manage their documents.",
            githubLink: "https://github.com/Joashh/laravel-cpaf",
        },
        {
            image: "images/robot.jpg",
            title: "Robot Line Follower Arduino",
            description: "I developed a robot that can follow a line using Arduino. The robot uses a machine learning technique that classify its movement. The project was created using Arduino IDE and C++ programming language with the help of ESP Wifi Module. The robot is designed to be efficient and accurate, allowing it to follow the line with minimal deviation.",
            githubLink: "https://github.com/Joashh/-Robot-Line-Follower?tab=readme-ov-file",
        },
    ];

    const previousIndex = useRef(currentProject);
    const direction = currentProject > previousIndex.current ? 1 : -1;
    previousIndex.current = currentProject;

    const variants = {
        initial: (dir) => ({ y: dir * 100, opacity: 0 }),
        animate: { y: 0, opacity: 1 },
        exit: (dir) => ({ y: dir * -100, opacity: 0 }),
    };

    return (
        <div className="relative w-full h-full">
            <div className="flex flex-col overflow-hidden h-full">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentProject}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        <img
                            src={projects[currentProject].image}
                            alt={`project${currentProject + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
                            <div className="p-5">
                                <h1 className="text-white text-xl font-semibold pb-2">
                                    {projects[currentProject].title}
                                </h1>
                                <p className="w-1/2 text-justify text-white">
                                    {projects[currentProject].description}
                                </p>
                                <div className="flex gap-4 pt-3">
                                    <button className="bg-gray-800 p-3 rounded-md shadow-lg hover:bg-gray-700 active:bg-gray-900 text-white">
                                        Documentation
                                    </button>
                                    <button
                                        className="bg-gray-800 p-3 rounded-md shadow-lg hover:bg-gray-700 active:bg-gray-900 text-white"
                                        onClick={() => window.open(projects[currentProject].githubLink, "_blank")}
                                    >
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            index === currentProject ? "bg-blue-500" : "bg-gray-500"
                        } transition-all`}
                    />
                ))}
            </div>
        </div>
    );
}
