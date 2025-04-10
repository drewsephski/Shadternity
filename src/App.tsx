import { useState, useEffect } from 'react';  
import Navbar from './components/Navigation';  
import Hero from './components/Hero';  
import Projects from './components/Projects';  
import Contact from './components/Contact';  
import Footer from './components/Footer';  
import { motion, AnimatePresence } from 'framer-motion';  
import './App.css';

export default function App() {  
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {  
    // Simulate loading assets  
    const timer = setTimeout(() => {  
      setLoading(false);  
    }, 1500);  
    
    return () => clearTimeout(timer);  
  }, []);  

  return (  
    <>  
      <AnimatePresence>  
        {loading ? (  
          <motion.div  
            key="loader"  
            initial={{ opacity: 1 }}  
            exit={{ opacity: 0 }}  
            transition={{ duration: 0.5 }}  
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"  
          >  
            <div className="flex flex-col items-center">  
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>  
              <p className="text-muted-foreground">Loading...</p>  
            </div>  
          </motion.div>  
        ) : null}  
      </AnimatePresence>  
      
      <div className="min-h-screen">  
        <Navbar />  
        <Hero />  
        <Projects />  
        <Contact />  
        <Footer />  
      </div>  
    </>  
  );  
}  