import React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive admin dashboard for managing online store operations with real-time analytics.',
        image: '/placeholder-1.jpg',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
        demoUrl: '#',
        repoUrl: '#',
    },
    {
        id: 2,
        title: 'AI Image Generator',
        description: 'Web application that creates unique images from text descriptions using machine learning.',
        image: '/placeholder-2.jpg',
        tags: ['Next.js', 'OpenAI API', 'Framer Motion', 'Vercel'],
        demoUrl: '#',
        repoUrl: '#',
    },
    {
        id: 3,
        title: 'Portfolio Template',
        description: 'Customizable portfolio site template for developers with animation and 3D elements.',
        image: '/placeholder-3.jpg',
        tags: ['React', 'Three.js', 'GSAP', 'Netlify'],
        demoUrl: '#',
        repoUrl: '#',
    },
    {
        id: 4,
        title: 'Task Management App',
        description: 'Collaborative task management application with real-time updates and team workspaces.',
        image: '/placeholder-4.jpg',
        tags: ['Vue.js', 'Supabase', 'TailwindCSS', 'PWA'],
        demoUrl: '#',
        repoUrl: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-muted/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore some of my recent work that showcases my skills and passion for building exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden h-full flex flex-col">
                                <div className="aspect-video bg-muted overflow-hidden">
                                    <div className="w-full h-full bg-blue-500/20 flex items-center justify-center">
                                        <span className="text-muted-foreground">[Project Image]</span>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" size="sm" asChild>
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-1 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                    <Button size="sm" asChild>
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-1 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
