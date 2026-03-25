"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "../../../public/logo.png";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo placeholder - assuming user will save it to /logo.png */}
          <Image src={logoImage} alt="LaTaVi Logo" width={300} height={100} className="h-[4.5rem] w-auto object-contain scale-[1.8] origin-left ml-2" priority />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium font-mono">
          <Link href="#services" className="text-slate-600 hover:text-azure transition-colors">SERVICES</Link>
          <Link href="#lab" className="text-slate-600 hover:text-aws transition-colors">THE_LAB</Link>
          <Link href="#metrics" className="text-slate-600 hover:text-azure transition-colors">METRICS</Link>
          <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">ABOUT</Link>
        </div>
        <Button className="bg-azure hover:bg-azure/80 text-white rounded-none border border-azure/50 font-mono">
          GET_STARTED
        </Button>
      </div>
    </motion.nav>
  );
}
