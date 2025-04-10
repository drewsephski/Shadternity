import React from "react";

const projects = [
    { title: "Project One", description: "Responsive Grid Layout", year: "2022" },
    {
        title: "Project Two",
        description: "Modern Resume Portfolio",
        year: "2023",
    },
    {
        title: "Project Three",
        description: "Cinematic Movie Website",
        year: "2021",
    },
];

const Grid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
                <div key={idx} className="p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    <span className="mt-4 inline-block text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {project.year}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Grid;
