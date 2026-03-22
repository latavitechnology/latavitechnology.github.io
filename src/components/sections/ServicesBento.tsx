"use client";

import { Cloud, Shield, Server, ArrowRight, Zap, Database } from "lucide-react";

export function ServicesBento() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-4 text-white">Specialist Services</h2>
          <p className="text-muted-foreground font-mono max-w-2xl">
            Dual-focus mastery in Microsoft Azure and Amazon Web Services infra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Azure Section */}
          <div className="lg:col-span-2 group relative border border-white/10 p-8 rounded-xl bg-gradient-to-br from-azure/5 to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-azure transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-linear" />
            <h3 className="text-3xl mt-2 mb-2 font-bold text-azure font-mono">Microsoft Azure</h3>
            <p className="text-muted-foreground font-sans mb-8">Enterprise-grade cloud transformation and security.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-black/60 border border-white/5 p-6 rounded-lg hover:border-azure/40 transition-colors">
                <Cloud className="text-azure mb-4" size={32} />
                <h4 className="font-semibold mb-1 text-white">Cloud Migration</h4>
                <p className="text-sm text-muted-foreground">Seamless transition to modern infrastructure.</p>
              </div>
              <div className="bg-black/60 border border-white/5 p-6 rounded-lg hover:border-azure/40 transition-colors">
                <Shield className="text-azure mb-4" size={32} />
                <h4 className="font-semibold mb-1 text-white">Entra ID</h4>
                <p className="text-sm text-muted-foreground">Identity and access management control.</p>
              </div>
              <div className="bg-black/60 border border-white/5 p-6 rounded-lg hover:border-azure/40 transition-colors">
                <Server className="text-azure mb-4" size={32} />
                <h4 className="font-semibold mb-1 text-white">Azure Sentinel</h4>
                <p className="text-sm text-muted-foreground">Intelligent security analytics.</p>
              </div>
            </div>
          </div>

          {/* AWS Section */}
          <div className="group relative border border-white/10 p-8 rounded-xl bg-gradient-to-bl from-aws/5 to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-aws transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-linear" />
            <h3 className="text-3xl mt-2 mb-2 font-bold text-aws font-mono">AWS</h3>
            <p className="text-muted-foreground font-sans mb-8">Scalable, serverless architectures.</p>
            
            <div className="space-y-4">
               <div className="flex items-start gap-4 bg-black/60 border border-white/5 p-4 rounded-lg hover:border-aws/40 transition-colors">
                 <ArrowRight className="text-aws mt-1" size={20} />
                 <div>
                   <span className="font-semibold text-white block">AppStream 2.0</span>
                   <span className="text-xs text-muted-foreground">Secure app streaming.</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 bg-black/60 border border-white/5 p-4 rounded-lg hover:border-aws/40 transition-colors">
                 <Zap className="text-aws mt-1" size={20} />
                 <div>
                   <span className="font-semibold text-white block">AWS Lambda</span>
                   <span className="text-xs text-muted-foreground">Event-driven serverless computing.</span>
                 </div>
               </div>
               <div className="flex items-start gap-4 bg-black/60 border border-white/5 p-4 rounded-lg hover:border-aws/40 transition-colors">
                 <Database className="text-aws mt-1" size={20} />
                 <div>
                   <span className="font-semibold text-white block">CloudFormation</span>
                   <span className="text-xs text-muted-foreground">Infrastructure as Code.</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
