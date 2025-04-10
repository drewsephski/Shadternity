import React from "react";

const Navigation: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800">
            <div className="text-lg font-semibold">My Portfolio</div>
            <ul className="flex space-x-4">
                {["About", "Resume", "Projects", "Contact"].map((item) => (
                    <li key={item}>
                        <button className="px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-700 rounded-md transition-colors">{item}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
