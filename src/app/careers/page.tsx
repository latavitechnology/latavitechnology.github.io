"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Shield, Cpu, ArrowUpRight } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Cloud Architect (Azure/AWS)",
      location: "Remote / Hybrid",
      type: "Full-time",
      icon: <Cpu className="text-azure" />,
      description: "Lead complex cloud migrations and architect resilient, multi-cloud infrastructure for enterprise clients."
    },
    {
      title: "DevSecOps Engineer",
      location: "Remote",
      type: "Full-time",
      icon: <Shield className="text-aws" />,
      description: "Integrate security into the CI/CD pipeline and implement Zero Trust architectures for global platforms."
    },
    {
      title: "Full-Stack Developer (AI/ML Integration)",
      location: "Hybrid",
      type: "Contract",
      icon: <Code className="text-slate-900" />,
      description: "Build modern web applications with a focus on integrating LLMs and AI-driven automation."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="container mx-auto px-6 max-w-4xl py-20 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">Join the Lab.</h1>
            <p className="text-xl text-slate-600 font-mono leading-relaxed max-w-2xl">
              We are looking for engineers and architects who are obsessed with excellence, security, and the future of cloud computing.
            </p>
          </div>

          <div className="grid gap-6">
            <h2 className="text-sm font-mono text-azure font-bold uppercase tracking-[0.2em] mb-4">Current Openings</h2>
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border border-slate-200 p-8 rounded-2xl hover:border-azure/50 hover:shadow-xl hover:shadow-azure/5 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex gap-6 items-start">
                  <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-azure/5 transition-colors">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                    <div className="flex gap-4 text-sm font-mono text-slate-400 mb-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed max-w-md">{job.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-azure font-mono font-bold text-sm uppercase transition-all group-hover:translate-x-1">
                  View Role <ArrowUpRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-900 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tighter">Don't see a fit?</h2>
            <p className="text-slate-400 mb-8 font-mono max-w-lg mx-auto">
              We're always growing. Send your CV and a brief description of your technical philosophy to our team.
            </p>
            <a 
              href="mailto:careers@latavi.com" 
              className="inline-block bg-azure hover:bg-azure/80 text-white px-8 py-4 rounded-none font-mono tracking-widest text-sm uppercase transition-all shadow-lg shadow-azure/20"
            >
              General Application
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
