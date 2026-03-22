"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo placeholder - assuming user will save it to /logo.png */}
          <div className="bg-white p-1 rounded-sm flex items-center justify-center">
            <img src="/logo.png" alt="LaTaVi Logo" className="h-10 object-contain" />
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium font-mono">
          <Link href="#services" className="hover:text-azure transition-colors">SERVICES</Link>
          <Link href="#lab" className="hover:text-aws transition-colors">THE_LAB</Link>
          <Link href="#metrics" className="hover:text-azure transition-colors">METRICS</Link>
          <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
        </div>
        <Button className="bg-azure hover:bg-azure/80 text-white rounded-none border border-azure/50 font-mono">
          GET_STARTED
        </Button>
      </div>
    </motion.nav>
  );
}
