"use client";

import { BookOpen, Calculator, LineChart, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export function CloudLab() {
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
                <Link 
                  key={art.id} 
                  href={`/lab/${art.id}`}
                  className={`border border-slate-200 bg-white shadow-lg shadow-slate-200/50 p-6 rounded-xl group hover:border-${art.color}/50 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between`}
                >
                  <div>
                    <BookOpen className={`text-slate-400 mb-4 group-hover:text-${art.color} transition-colors`} size={24} />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{art.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 font-sans leading-relaxed line-clamp-3">{art.preview}</p>
                  </div>
                  <div className={`text-xs font-mono text-${art.color} flex items-center gap-1 font-semibold underline underline-offset-4`}>READ_FULL_ARTICLE <ArrowUpRight size={14} /></div>
                </Link>
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
    </section>
  );
}

