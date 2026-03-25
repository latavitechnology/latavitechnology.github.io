"use client";

import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section id="metrics" className="py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tighter text-slate-900">Customer Happiness Experience</h2>
          <p className="text-slate-600 font-mono mt-4">Quantifiable success across the global cloud.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-12 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-aws/5 rounded-full blur-3xl" />
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.4, ease: "linear" }} className="relative z-10">
            <h4 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter text-slate-900 mb-2">99.9<span className="text-azure">%</span></h4>
            <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">Uptime SLA</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.4, delay: 0.1, ease: "linear" }} className="relative z-10 border-t border-b py-8 md:py-0 md:border-t-0 md:border-b-0 md:border-l md:border-r border-slate-100">
            <h4 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter text-slate-900 mb-2">40<span className="text-aws">%</span></h4>
            <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">Latency Reduction</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.4, delay: 0.2, ease: "linear" }} className="relative z-10">
            <h4 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter text-slate-900 mb-2">24<span className="text-azure">/</span>7</h4>
            <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">Customer Happiness</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
