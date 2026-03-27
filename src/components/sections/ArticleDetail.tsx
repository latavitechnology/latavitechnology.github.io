"use client";

import { Article } from "@/lib/articles";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export function ArticleDetail({ article }: { article: Article }) {
  const router = useRouter();

  return (
    <div className="pb-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumbs / Back */}
          <button 
            onClick={() => router.push('/#lab')}
            className="flex items-center gap-2 text-slate-500 hover:text-azure transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back_to_Lab</span>
          </button>

          {/* Header */}
          <header className="mb-16">
             <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${article.color === 'azure' ? 'bg-azure/10' : 'bg-aws/10'}`}>
                   <BookOpen className={article.color === 'azure' ? 'text-azure' : 'text-aws'} size={32} />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">Technical_Deep_Dive</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
               {article.title}
             </h1>
             <div className="flex items-center gap-6 border-y border-slate-200 py-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-slate-200 border border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-500">LT</div>
                   <span className="text-sm font-semibold text-slate-900">LaTaVi Engineering</span>
                </div>
                <div className="h-4 w-[1px] bg-slate-200" />
                <span className="text-sm text-slate-500 font-mono italic">Est. Reading: 8 mins</span>
             </div>
          </header>

          {/* Content */}
          <article className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16 overflow-hidden">
            {article.content}
          </article>

          {/* Footer / Share */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-slate-200">
             <div>
                <h4 className="font-bold text-slate-900 mb-2">Want to discuss this architecture?</h4>
                <p className="text-sm text-slate-500">Our engineers are available for specialized consultations.</p>
             </div>
             <button 
                onClick={() => router.push('/#contact')}
                className="bg-slate-900 text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-azure transition-colors"
             >
               START_CONVERSATION
             </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
