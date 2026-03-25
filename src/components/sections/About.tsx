export function About() {
  return (
    <section id="about" className="py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden shadow-inner">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-azure/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-azure mb-6 uppercase tracking-[0.2em]">Our Mission</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-slate-900 mb-10 leading-[1.1]">
            Moving businesses toward seamless, secure, and infinitely scalable infrastructure.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-mono leading-relaxed max-w-3xl mx-auto">
            LaTaVi was founded on the principle that enterprise cloud doesn't have to be complicated. By focusing purely on Microsoft Azure and Amazon Web Services, we deliver precision-engineered solutions that drive performance and ensure bulletproof security.
          </p>
        </div>
      </div>
    </section>
  );
}
