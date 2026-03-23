"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // For real usage: Replace 'your-email@latavi.com' with your actual email!
      const res = await fetch("https://formsubmit.co/ajax/thetechnologycompany77@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-white mb-6">Start the Project.</h2>
            <p className="text-lg text-muted-foreground font-mono mb-12">
              Ready to architect your global cloud? Fill out the intake form and an engineer will be in touch securely.
            </p>
            <div className="space-y-4 text-sm font-mono text-muted-foreground bg-black/50 p-6 rounded-xl border border-white/5 inline-block">
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-azure animate-pulse" /> RESPONSE_TIME: &lt; 2_HOURS</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aws animate-pulse" /> OPERATIONS: 24/7/365</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="bg-[#050505] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative"
          >
            {/* Glow effect on hover can be done via class or just static focus glow on inputs */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === "success" && (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-md border border-green-500/50 text-sm font-mono">
                  MESSAGE_RECEIVED. An engineer will be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-500/20 text-red-400 p-4 rounded-md border border-red-500/50 text-sm font-mono">
                  ERROR_SUBMITTING_FORM. Please try again later.
                </div>
              )}

              {/* FormSubmit.co requires this hidden field to prevent captcha during AJAX if desired, or honeypot */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Full Name</label>
                <Input name="name" required placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-azure focus-visible:border-azure rounded-none h-12 text-white transition-all shadow-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Corporate Email</label>
                <Input type="email" name="email" required placeholder="john@company.com" className="bg-black/50 border-white/10 focus-visible:ring-azure focus-visible:border-azure rounded-none h-12 text-white transition-all shadow-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Cloud Platform</label>
                <Select name="platform">
                  <SelectTrigger className="bg-black/50 border-white/10 focus:ring-azure h-12 rounded-none text-white">
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0A0A0A] border-white/10 text-white rounded-none">
                    <SelectItem value="azure" className="focus:bg-azure/20 focus:text-white">Microsoft Azure</SelectItem>
                    <SelectItem value="aws" className="focus:bg-aws/20 focus:text-white">Amazon Web Services</SelectItem>
                    <SelectItem value="multi" className="focus:bg-white/10 focus:text-white">Multi-Cloud / Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Project Scope</label>
                <Textarea name="scope" required placeholder="Tell us about your infrastructure needs..." className="bg-black/50 border-white/10 focus-visible:ring-azure focus-visible:border-azure rounded-none min-h-[140px] text-white transition-all shadow-none" />
              </div>

              <Button disabled={isSubmitting} className="w-full bg-azure hover:bg-[#0066CC] text-white rounded-none border border-azure/50 h-14 font-mono tracking-[0.1em] transition-all duration-300 shadow-[0_0_15px_rgba(0,127,255,0.3)] hover:shadow-[0_0_25px_rgba(0,127,255,0.5)]">
                {isSubmitting ? "PROCESSING..." : "SUBMIT_REQUEST"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
