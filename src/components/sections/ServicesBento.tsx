"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Settings, 
  Terminal, 
  Cpu, 
  Database, 
  BarChart3, 
  Scale, 
  Layers,
  CloudCog
} from "lucide-react";

const services = [
  { title: "SSO", desc: "Single Sign-On & Identity", icon: Lock, color: "text-azure" },
  { title: "Security", desc: "Threat Detection & SecOps", icon: ShieldCheck, color: "text-azure" },
  { title: "SRE", desc: "Site Reliability Engineering", icon: Settings, color: "text-slate-600" },
  { title: "DevOps", desc: "CI/CD & Infrastructure as Code", icon: Terminal, color: "text-aws" },
  { title: "AI", desc: "Machine Learning & Automation", icon: Cpu, color: "text-azure" },
  { title: "Database", desc: "Managed & Modern Data", icon: Database, color: "text-aws" },
  { title: "FinOps", desc: "Cloud Cost Optimization", icon: BarChart3, color: "text-aws" },
  { title: "Governance", desc: "Compliance & Policy Guardrails", icon: Scale, color: "text-azure" },
  { title: "Cloud Native", desc: "Serverless & Microservices", icon: Layers, color: "text-aws" },
];

export function ServicesBento() {
  // Triple the items for seamless infinite loop
  const marqueeItems = [...services, ...services, ...services];

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-4 text-slate-900 uppercase">Specialist Services</h2>
            <p className="text-slate-600 font-mono text-lg">
              Dual-focus mastery in Microsoft Azure and Amazon Web Services infra.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-azure" /> AZURE</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-aws" /> AWS</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400" /> MULTI-CLOUD</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        {/* Marquee Container */}
        <div className="flex overflow-hidden select-none py-10">
          <motion.div 
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
            className="flex flex-nowrap gap-6 pr-6"
          >
            {marqueeItems.map((service, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[280px] md:w-[350px] bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:border-azure/40 transition-all hover:shadow-2xl hover:-translate-y-1 relative group/card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-slate-50 ${service.color} group-hover/card:bg-white transition-colors`}>
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">{service.title}</h4>
                </div>
                <p className="text-slate-500 font-sans leading-relaxed">{service.desc}</p>
                
                <div className="absolute bottom-4 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity">
                   <CloudCog size={16} className="text-slate-200" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
