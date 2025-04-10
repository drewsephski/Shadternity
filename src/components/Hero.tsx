import React from 'react';
import ThreeCanvas from './ThreeCanvas';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-gray-800">
            <div className="absolute z-0 w-full h-full">
                {/* Three.js canvas background */}
                <ThreeCanvas />
            </div>
            <div className="relative z-10 text-center">
                <img
                    className="w-32 h-32 rounded-full mx-auto border-2 border-white"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                />
                <h1 className="mt-4 text-4xl font-bold">I&apos;m a Web Developer</h1>
                <p className="mt-2 text-lg">Building interactive interfaces with modern web technologies.</p>
            </div>
        </section>
    );
};

export default Hero;