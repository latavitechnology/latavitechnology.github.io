"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [index, setIndex] = useState(0);
  const words = ["Global Cloud.", "Modern Infra.", "Digital Era.", "Secure Future."];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aws/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold mb-10 text-slate-900 leading-[1.1]"
        >
          Architecting the <br/>
          <span className="grid place-items-center h-[1.1em] relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-r from-azure via-slate-800 to-aws whitespace-nowrap px-4"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "linear" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono"
        >
          Precision-engineered Azure & AWS infrastructure for the modern enterprise.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
        >
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            size="lg" 
            className="w-full sm:w-auto bg-azure hover:bg-azure/80 text-white rounded-none border border-azure/50 text-base h-14 px-8 font-mono tracking-widest shadow-lg shadow-azure/20"
          >
            LET'S TALK
          </Button>
          <Button 
            onClick={() => document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth'})}
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto rounded-none border-slate-300 hover:bg-slate-50 text-slate-900 text-base h-14 px-8 font-mono tracking-widest shadow-sm"
          >
            THE_LAB
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
