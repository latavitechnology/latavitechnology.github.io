import { BookOpen, Calculator, LineChart, ArrowUpRight } from "lucide-react";

export function CloudLab() {
  return (
    <section id="lab" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter mb-4 text-white">The Cloud Lab</h2>
          <p className="text-muted-foreground font-mono max-w-2xl">
            Resource hub, technical insights, and calculation tools for the modern infra architect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tech Blogs */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
             <div className="border border-white/10 bg-black/50 p-6 rounded-xl group hover:border-azure/50 transition-colors cursor-pointer flex flex-col justify-between">
                <div>
                  <BookOpen className="text-muted-foreground mb-4 group-hover:text-azure transition-colors" size={24} />
                  <h4 className="text-xl font-bold text-white mb-2">Zero Trust in Azure</h4>
                  <p className="text-sm text-muted-foreground mb-6">Implementing identity-first security architectures.</p>
                </div>
                <div className="text-xs font-mono text-azure flex items-center gap-1">READ_ARTICLE <ArrowUpRight size={14} /></div>
             </div>
             <div className="border border-white/10 bg-black/50 p-6 rounded-xl group hover:border-aws/50 transition-colors cursor-pointer flex flex-col justify-between">
                <div>
                  <BookOpen className="text-muted-foreground mb-4 group-hover:text-aws transition-colors" size={24} />
                  <h4 className="text-xl font-bold text-white mb-2">AWS Cost Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-6">Strategies for scaling down without losing performance.</p>
                </div>
                <div className="text-xs font-mono text-aws flex items-center gap-1">READ_ARTICLE <ArrowUpRight size={14} /></div>
             </div>
          </div>

          {/* Free Tools */}
          <div className="border border-white/10 bg-[#050505] p-6 rounded-xl flex flex-col justify-between">
             <div>
                <h3 className="text-2xl font-sans font-bold text-white mb-2">Free Tools</h3>
                <p className="text-sm text-muted-foreground mb-8 font-mono">Assess and estimate in seconds.</p>
                
                <div className="space-y-4">
                  <div className="bg-black/60 border border-white/5 p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="bg-azure/20 p-2 rounded-md"><Calculator className="text-azure" size={20} /></div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Cloud Health Calculator</h5>
                      <p className="text-xs text-muted-foreground">Audit your current setup.</p>
                    </div>
                  </div>
                  <div className="bg-black/60 border border-white/5 p-4 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="bg-aws/20 p-2 rounded-md"><LineChart className="text-aws" size={20} /></div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Cost Estimator</h5>
                      <p className="text-xs text-muted-foreground">Project multi-cloud spend.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
