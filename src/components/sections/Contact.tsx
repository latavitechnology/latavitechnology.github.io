"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "validation_error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    if (!formRef.current) return;

    // Manual validation check to bypass silent failures on hidden components
    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const scope = formData.get("scope") as string;

    if (!name || !email || !scope) {
      setStatus("validation_error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    console.log("Submitting form...", Object.fromEntries(formData.entries()));

    try {
      const res = await fetch("https://formsubmit.co/ajax/246a4985f910688dba417d7154e7a358", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (res.ok) {
        console.log("Success!");
        setStatus("success");
        formRef.current.reset();
      } else {
        console.error("FormSubmit Error", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch Exception:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-slate-900 mb-6">Start the Project.</h2>
            <p className="text-lg text-slate-600 font-mono mb-12">
              Ready to architect your global cloud? Fill out the intake form and an engineer will be in touch securely.
            </p>
            <div className="space-y-4 text-sm font-mono text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 inline-block shadow-sm">
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-azure animate-pulse" /> RESPONSE_TIME: &lt; 2_HOURS</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-aws animate-pulse" /> OPERATIONS: 24/7/365</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 relative"
          >
            {/* Glow effect on hover can be done via class or just static focus glow on inputs */}
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
              {status === "success" && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 text-sm font-mono">
                  MESSAGE_RECEIVED. An engineer will be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-200 text-sm font-mono">
                  ERROR_SUBMITTING_FORM. Please try again later.
                </div>
              )}
              {status === "validation_error" && (
                <div className="bg-orange-50 text-orange-700 p-4 rounded-md border border-orange-200 text-sm font-mono">
                  PLEASE_FILL_REQUIRED_FIELDS. Name, Email, and Scope are necessary.
                </div>
              )}

              {/* FormSubmit.co requires this hidden field to prevent captcha during AJAX if desired. */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Invisible HoneyPot field to catch spam bots without bothering real users */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Full Name</label>
                <Input name="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 focus-visible:ring-azure focus-visible:border-azure rounded-none h-12 text-slate-900 transition-all shadow-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Corporate Email</label>
                <Input type="email" name="email" required placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus-visible:ring-azure focus-visible:border-azure rounded-none h-12 text-slate-900 transition-all shadow-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Cloud Platform</label>
                <Select name="platform">
                  <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-azure h-12 rounded-none text-slate-900">
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-slate-900 rounded-none shadow-lg">
                    <SelectItem value="azure" className="focus:bg-azure/10 focus:text-azure">Microsoft Azure</SelectItem>
                    <SelectItem value="aws" className="focus:bg-aws/10 focus:text-aws">Amazon Web Services</SelectItem>
                    <SelectItem value="multi" className="focus:bg-slate-100 focus:text-slate-900">Multi-Cloud / Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Project Scope</label>
                <Textarea name="scope" required placeholder="Tell us about your infrastructure needs..." className="bg-slate-50 border-slate-200 focus-visible:ring-azure focus-visible:border-azure rounded-none min-h-[140px] text-slate-900 transition-all shadow-none" />
              </div>

              <Button type="button" onClick={() => handleSubmit()} disabled={isSubmitting} className="w-full bg-azure hover:bg-[#0066CC] text-white rounded-none border border-azure/50 h-14 font-mono tracking-[0.1em] transition-all duration-300 shadow-[0_0_15px_rgba(0,127,255,0.3)] hover:shadow-[0_0_25px_rgba(0,127,255,0.5)]">
                {isSubmitting ? "PROCESSING..." : "SUBMIT_REQUEST"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
