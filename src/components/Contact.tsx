import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: false
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus({ submitted: false, submitting: true, error: false });

        // Simulate form submission  
        setTimeout(() => {
            setFormStatus({ submitted: true, submitting: false, error: false });
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="bg-gradient-to-b from-background to-muted/20">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={formStatus.submitting}
                            >
                                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {formStatus.submitted && (
                                <p className="text-sm text-green-500">Thank you for your message! I'll get back to you soon.</p>
                            )}

                            {formStatus.error && (
                                <p className="text-sm text-red-500">Something went wrong. Please try again later.</p>
                            )}
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <p className="text-muted-foreground mb-8">
                                Feel free to reach out if you have any questions or if you're interested in working together. I'm always open to discussing new projects and opportunities.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3 text-blue-500" />
                                    <span>hello@example.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-0">
                            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                            <div className="flex space-x-4">
                                <Button variant="outline" size="icon" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="icon" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="icon" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
