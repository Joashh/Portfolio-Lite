import { useState } from 'react';

export default function Projects() {

   
    const projects = [
        {
            image: "images/dysg.png",
            title: "Potential Dysgraphia Detection Tool (Prototype)",
            description:
                "I developed and trained a model that can detect potential dysgraphia using handwriting as input. The model assesses features such as stroke patterns, character recognition, and letter alignment. It was created using PyTesseract and other machine learning techniques. The model currently achieves 65% accuracy, which is constrained by the limitations of the available dataset.",
            githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
        },
        {
            image: "images/dysg.png",
            title: "Potential Dysgraphia Detection Tool (Prototype)",
            description:
            "wew",
            githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
        },
        {
            image: "images/dysg.png",
            title: "Potential Dysgraphia Detection Tool (Prototype)",
            description:
                "I developed and trained a model that can detect potential dysgraphia using handwriting as input. The model assesses features such as stroke patterns, character recognition, and letter alignment. It was created using PyTesseract and other machine learning techniques. The model currently achieves 65% accuracy, which is constrained by the limitations of the available dataset.",
            githubLink: "https://github.com/Joashh/Dysgraphia-Detection-Prototype-Python-Pycharm-Project?tab=readme-ov-file",
        },
        // Add more project objects here
    ];

    const [currentProject, setCurrentProject] = useState(0);

    const goToProject = (index2) => {
        setCurrentProject(index2);
    };

    return (
        <div className="relative w-full h-full">
            <div className="flex flex-col overflow-hidden h-full">
                
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative w-full h-full ${index === currentProject ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={project.image}
                            alt={`project${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
                            <div className="p-5">
                                <h1 className="text-white text-xl font-semibold pb-2">{project.title}</h1>
                                <p className="w-1/2 text-justify">{project.description}</p>
                                <div className="flex gap-4 pt-3">
                                    <button className="bg-gray-800 p-3 rounded-md shadow-lg hover:bg-gray-700 active:bg-gray-900">
                                        Documentation
                                    </button>
                                    <button
                                        className="bg-gray-800 p-3 rounded-md shadow-lg hover:bg-gray-700 active:bg-gray-900"
                                        onClick={() => {
                                            window.open(project.githubLink, "_blank");
                                        }}
                                    >
                                        Github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToProject(index)}
                        className={`w-3 h-3 rounded-full bg-gray-300 cursor-pointer ${index === currentProject ? 'bg-blue-500' : 'bg-gray-500'} transition-all`}
                    />
                ))}
            </div>
        </div>
    );
}
