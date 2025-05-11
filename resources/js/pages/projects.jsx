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
            title: "Project B",
            description: "Another project description here.",
            githubLink: "https://github.com/example/project-b",
        },
        {
            image: "images/dysg.png",
            title: "Project C",
            description: "Yet another project description.",
            githubLink: "https://github.com/example/project-c",
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
                        transition={{ duration: 0.4, ease: "easeOut" }}
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
