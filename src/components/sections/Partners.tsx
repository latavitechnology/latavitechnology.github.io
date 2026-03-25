"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft Azure", color: "#007FFF" },
  { name: "Amazon Web Services", color: "#FF9900" },
  { name: "Cisco", color: "#1BA0D7" },
  { name: "Fortinet", color: "#C81326" }
];

export function Partners() {
  return (
    <section className="py-24 border-y border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-mono text-slate-500 mb-12 uppercase tracking-[0.2em]">Global Expertise & Partners</p>
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-80">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1, ease: "linear" }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer flex items-center justify-center p-4 grayscale transition-all duration-300 hover:grayscale-0"
              style={{ color: partner.color }}
            >
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
