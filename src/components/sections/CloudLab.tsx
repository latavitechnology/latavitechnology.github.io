"use client";

import { BookOpen, Calculator, LineChart, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CloudLab() {
  const [selectedArticle, setSelectedArticle] = useState<null | { title: string, content: React.ReactNode }>(null);

  const articles = [
    {
      id: 'excellence',
      title: "Engineering Excellence: How LaTaVi Implements Modern Infrastructure",
      preview: "At LaTaVi, we don't just 'deliver' IT services; we engineer solutions built for the future...",
      color: "azure",
      content: (
        <div className="space-y-8 text-slate-700 leading-relaxed font-sans text-base">
          <section>
            <p className="mb-4">At <strong className="text-slate-900 font-bold">LaTaVi</strong>, we don't just "deliver" IT services; we engineer solutions built for the future. Our core philosophy is rooted in the belief that speed should never come at the expense of stability, and innovation should never compromise security.</p>
            <p>To ensure our clients receive world-class results, every project we undertake follows a rigorous set of industry-recognized frameworks. From the initial architecture to the final deployment, LaTaVi integrates Cloud Adoption Frameworks, Site Reliability Engineering (SRE), and Zero Trust security as standard operating procedures.</p>
          </section>

          <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-azure">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">1. The Cloud Adoption Framework (CAF): A Strategic Blueprint</h3>
            <p className="mb-4 text-sm">Moving to the cloud is a journey, not a single event. Without a roadmap, organizations often face spiralling costs and complex "technical debt." At LaTaVi, we utilize a vendor-neutral <strong className="text-azure">Cloud Adoption Framework (CAF)</strong> to ensure your digital transformation is aligned with your business goals.</p>
            <ul className="space-y-2 mb-6 text-sm">
              <li><strong className="text-slate-900 font-semibold">• Strategy & Planning:</strong> We define clear business outcomes and rationalize your existing digital estate to prioritize workloads.</li>
              <li><strong className="text-slate-900 font-semibold">• Ready (Landing Zones):</strong> We build "Landing Zones"—pre-configured, secure environments with standardized networking, identity, and governance.</li>
              <li><strong className="text-slate-900 font-semibold">• Adopt:</strong> We execute migrations and modernization in iterative "waves," starting with low-complexity apps.</li>
              <li><strong className="text-slate-900 font-semibold">• Govern & Manage:</strong> We implement automated guardrails to monitor resource health, cost optimization, and compliance continuously.</li>
            </ul>
            <div className="mt-8 bg-white p-4 rounded-lg border border-slate-200">
               <p className="text-[10px] font-mono text-slate-400 uppercase mb-2">Technical_Lifecycle_Artifact</p>
               {/* Use the logo or a relative image path. Assuming the user saves the attached image to /public/caf-lifecycle.jpg */}
               <Image 
                  src="/latavi/caf-lifecycle.jpg" 
                  alt="CAF Implementation Lifecycle" 
                  width={1200} 
                  height={800} 
                  className="rounded-lg shadow-md w-full object-cover"
                  priority
               />
            </div>
          </section>

          <section className="p-2">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-200 pb-2">2. Site Reliability Engineering (SRE): Resilience by Design</h3>
            <p className="mb-4">At LaTaVi, we treat operations as a software engineering problem. By applying <strong className="text-slate-900">Site Reliability Engineering (SRE)</strong> principles, we bridge the gap between development speed and system stability.</p>
            <ul className="space-y-3 pl-4 border-l border-slate-200">
              <li><strong className="text-slate-900 text-sm font-semibold block">Service Level Objectives (SLOs)</strong> <p className="text-sm">We define data-driven reliability targets that matter to your end-users, moving away from vague "uptime" goals.</p></li>
              <li><strong className="text-slate-900 text-sm font-semibold block">Error Budgets</strong> <p className="text-sm">We use error budgets to balance the pace of innovation with the need for stability.</p></li>
              <li><strong className="text-slate-900 text-sm font-semibold block">Toil Automation</strong> <p className="text-sm">We strive to eliminate "toil"—repetitive, manual operational tasks—through advanced scripting and automation.</p></li>
              <li><strong className="text-slate-900 text-sm font-semibold block">Blameless Post-mortems</strong> <p className="text-sm">When incidents occur, we focus on system flaws rather than human error, ensuring permanent fixes.</p></li>
            </ul>
          </section>

          <section className="bg-slate-900 text-slate-400 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">3. Zero Trust: Security Beyond the Perimeter</h3>
            <p className="mb-4 text-sm italic">"Never Trust, Always Verify."</p>
            <p className="mb-6 text-sm">LaTaVi implements a Zero Trust Architecture, ensuring access is never granted based on network location alone.</p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4">
                <span className="text-azure font-mono">01.</span>
                <p><span className="text-white font-bold">Verified Identity:</span> Every user, device, and service must be authenticated and authorized.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-azure font-mono">02.</span>
                <p><span className="text-white font-bold">Least Privilege Access:</span> We strictly limit user permissions to the bare minimum required for their task.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-azure font-mono">03.</span>
                <p><span className="text-white font-bold">Micro-segmentation:</span> We break the network into granular zones, preventing lateral movement of threats.</p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">4. DevSecOps: Security at the Speed of Code</h3>
            <p className="text-sm">Security isn't a "final check" at LaTaVi; it is woven into the very fabric of our development lifecycle. Through DevSecOps, we "shift security left," integrating automated vulnerability scanning and compliance checks directly into the CI/CD pipeline.</p>
          </section>

          <section className="bg-azure/5 p-6 rounded-xl border border-azure/20">
            <h4 className="font-bold text-azure mb-3 uppercase tracking-widest text-sm">Why Choose LaTaVi?</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-600">
              <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Vendor Neutral</span> Works across Azure, AWS, and GCP.</li>
              <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Scalable</span> Designed to grow as your business grows.</li>
              <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Audit-Ready</span> Automated governance and codified security.</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      id: 'cost',
      title: "AWS Cost Optimization",
      preview: "Strategies for scaling down without losing performance. Learn the art of rightsizing and leverage Spot Instances effectively.",
      color: "aws",
      content: (
        <div className="space-y-4">
          <p>This article is currently being updated for the latest AWS Savings Plans and Spot Instance strategies. Check back shortly for the full technical brief.</p>
          <div className="p-4 bg-aws/10 rounded-lg text-sm text-aws font-mono">
            RELATED_MODULE: CLOUD_EXCELLENCE_FRAMEWORK
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="lab" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-4 text-slate-900">The Cloud Lab</h2>
          <p className="text-slate-600 font-mono max-w-2xl">
            Resource hub, technical insights, and calculation tools for the modern infra architect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
             {articles.map((art) => (
                <div 
                  key={art.id} 
                  onClick={() => setSelectedArticle(art)}
                  className={`border border-slate-200 bg-white shadow-lg shadow-slate-200/50 p-6 rounded-xl group hover:border-${art.color}/50 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between`}
                >
                  <div>
                    <BookOpen className={`text-slate-400 mb-4 group-hover:text-${art.color} transition-colors`} size={24} />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{art.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 font-sans leading-relaxed line-clamp-3">{art.preview}</p>
                  </div>
                  <div className={`text-xs font-mono text-${art.color} flex items-center gap-1 font-semibold underline underline-offset-4`}>READ_FULL_ARTICLE <ArrowUpRight size={14} /></div>
                </div>
             ))}
          </div>

          <div className="border border-slate-200 bg-slate-50 p-6 rounded-xl flex flex-col justify-between shadow-inner">
             <div>
                <h3 className="text-2xl font-sans font-bold text-slate-900 mb-2">Free Tools</h3>
                <p className="text-[10px] text-slate-400 mb-4 font-mono leading-tight uppercase tracking-widest">
                  [DISCLAIMER: Use at your own risk. Test thoroughly before production use.]
                </p>
                <p className="text-sm text-slate-500 mb-8 font-mono">Assess and estimate in seconds.</p>
                
                <div className="space-y-4">
                  <a href="https://github.com/tariqsumsudeen/FIle-Share-to-Blob" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-100 shadow-sm p-4 rounded-lg flex items-start gap-4 cursor-pointer hover:bg-slate-50 hover:border-slate-200 transition-all flex-col">
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-slate-900/10 p-2 rounded-md"><ArrowUpRight className="text-slate-900" size={20} /></div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900">File-Share-to-Blob</h5>
                        <p className="text-xs text-slate-500">Secure storage migration script.</p>
                      </div>
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 leading-tight">Automates the movement of Azure File Sync data to Azure Blob Storage with metadata preservation and security logging.</p>
                  </a>
                  <div className="bg-white border border-slate-100 shadow-sm p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-slate-50 hover:border-slate-200 transition-all">
                    <div className="bg-azure/10 p-2 rounded-md"><Calculator className="text-azure" size={20} /></div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">Cloud Health Calculator</h5>
                      <p className="text-xs text-slate-500">Audit your current setup.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedArticle(null)} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white w-full max-w-4xl max-h-full overflow-y-auto rounded-2xl relative shadow-2xl custom-scrollbar"
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-md p-4 border-b border-slate-100 flex justify-between items-center z-10 px-8">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Engineering_Resource_DeepDive</span>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 md:p-12">
               <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-slate-900 mb-10 leading-none">
                 {selectedArticle.title}
               </h1>
               {selectedArticle.content}
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-200 text-center">
               <button 
                  onClick={() => setSelectedArticle(null)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-azure transition-colors"
               >
                 CLOSE_ARTICLE
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

