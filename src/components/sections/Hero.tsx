"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background mix-blend-multiply z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-azure/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aws/20 rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter mb-6"
        >
          Architecting the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-azure via-white to-aws">Global Cloud.</span>
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
          <Button size="lg" className="w-full sm:w-auto bg-azure hover:bg-azure/80 text-white rounded-none border border-azure/50 text-base h-14 px-8 font-mono tracking-widest">
            DEPLOY_NOW
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-none border-white/20 hover:bg-white/5 text-white text-base h-14 px-8 font-mono tracking-widest">
            TALK_TO_EXPERT
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
