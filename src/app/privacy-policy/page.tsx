"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="container mx-auto px-6 max-w-4xl py-20 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">Privacy Policy</h1>
          <p className="text-slate-500 mb-12 font-mono uppercase tracking-widest text-sm text-azure font-bold">Effective Date: March 26, 2026</p>

          <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">1. Introduction</h2>
              <p>
                At LaTaVi Cloud Solutions ("we", "our", or "us"), your privacy is of paramount importance. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our cloud consultancy services. We are committed to maintaining the confidentiality and security of the personal data we process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">2. Information Collection</h2>
              <p className="mb-4">We collect information that you provide directly to us, such as when you request a consultation, sign up for our newsletter, or contact us for support. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact Information (e.g., name, email address, phone number).</li>
                <li>Professional Information (e.g., job title, company name).</li>
                <li>Technical Data (e.g., IP address, browser type, cookies) collected automatically during your visit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">3. Basis for Processing</h2>
              <p>
                We process your personal data based on several legal grounds, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-slate-900">Contractual Necessity:</strong> To provide the services you have requested.</li>
                <li><strong className="text-slate-900">Legitimate Interests:</strong> To improve our website, prevent fraud, and market our services where permitted.</li>
                <li><strong className="text-slate-900">Legal Compliance:</strong> To comply with applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">4. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-100 pb-2">5. Your Rights (GDPR/CCPA)</h2>
              <p className="mb-4">Depending on your location, you may have specific rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to Access: Request a copy of the data we hold about you.</li>
                <li>Right to Rectification: Correct inaccurate or incomplete data.</li>
                <li>Right to Erasure: Request the deletion of your personal data.</li>
                <li>Right to Object: Object to the processing of your data for direct marketing.</li>
              </ul>
            </section>

            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">6. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please reach out to our Data Protection Officer:</p>
              <p className="font-mono text-azure font-bold">privacy@latavi.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
