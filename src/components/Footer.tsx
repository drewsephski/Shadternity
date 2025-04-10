import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-muted-foreground">
                        © {currentYear} Your Name. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Built with React, Tailwind CSS, and Three.js
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}  