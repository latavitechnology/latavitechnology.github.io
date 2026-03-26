"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="container mx-auto px-6 max-w-4xl py-20 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">Terms of Service</h1>
          <p className="text-slate-500 mb-12 font-mono uppercase tracking-widest text-sm text-aws font-bold">Last Updated: March 26, 2026</p>

          <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the LaTaVi Cloud Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">2. Description of Service</h2>
              <p>
                LaTaVi provides cloud architecture, migration, security, and AI consulting services. While we strive for excellence, we provide our website and information as-is. Technical articles and scripts provided in the "Cloud Lab" are for educational purposes and should be tested thoroughly in a non-production environment before use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and code snippets, is the property of LaTaVi Cloud Solutions or its content suppliers and is protected by international copyright laws. You may not reproduce, sell, or exploit any portion of the service without express written permission from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">4. User Conduct</h2>
              <p>You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Upload or transmit any malicious code or viruses.</li>
                <li>Attempt to gain unauthorized access to our systems or networks.</li>
                <li>Engage in any activity that disrupts or interferes with our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, LaTaVi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </section>

            <section className="bg-slate-900 text-slate-400 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">6. Modifications</h2>
              <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after changes are posted constitutes your acceptance of the new terms.</p>
              <p className="font-mono text-aws font-bold uppercase text-sm">questions? email: legal@latavi.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
