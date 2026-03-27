import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Article {
  id: string;
  title: string;
  preview: string;
  color: "azure" | "aws";
  content: React.ReactNode;
}

export const articles: Article[] = [
  {
    id: 'excellence',
    title: "Engineering Excellence: How LaTaVi Implements Modern Infrastructure",
    preview: "At LaTaVi, we don't just 'deliver' IT services; we engineer solutions built for the future...",
    color: "azure",
    content: (
      <div className="space-y-8 text-slate-700 leading-relaxed font-sans text-base">
        <section>
          <p className="mb-4">At <strong className="text-slate-900 font-bold">LaTaVi</strong>, we don't just "deliver" IT services; we engineer solutions built for the future. Our core philosophy is rooted in the belief that speed should never come at the expense of stability, and innovation should never compromise security.</p>
          <p>To ensure our clients receive world-class results, every project we undertake follows a rigorous set of industry-recognized frameworks. From the initial architecture to the final deployment, LaTaVi integrates Cloud Adoption Frameworks, Site Reliability Engineering (SRE), and Zero Trust security as standard operating procedures.</p>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-azure">
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">1. The Cloud Adoption Framework (CAF): A Strategic Blueprint</h3>
          <p className="mb-4 text-sm">Moving to the cloud is a journey, not a single event. Without a roadmap, organizations often face spiralling costs and complex "technical debt." At LaTaVi, we utilize a vendor-neutral <strong className="text-azure">Cloud Adoption Framework (CAF)</strong> to ensure your digital transformation is aligned with your business goals.</p>
          <ul className="space-y-2 mb-6 text-sm">
            <li><strong className="text-slate-900 font-semibold">• Strategy & Planning:</strong> We define clear business outcomes and rationalize your existing digital estate to prioritize workloads.</li>
            <li><strong className="text-slate-900 font-semibold">• Ready (Landing Zones):</strong> We build "Landing Zones"—pre-configured, secure environments with standardized networking, identity, and governance.</li>
            <li><strong className="text-slate-900 font-semibold">• Adopt:</strong> We execute migrations and modernization in iterative "waves," starting with low-complexity apps.</li>
            <li><strong className="text-slate-900 font-semibold">• Govern & Manage:</strong> We implement automated guardrails to monitor resource health, cost optimization, and compliance continuously.</li>
          </ul>
          <div className="mt-8 bg-white p-4 rounded-lg border border-slate-200">
             <p className="text-[10px] font-mono text-slate-400 uppercase mb-2">Technical_Lifecycle_Artifact</p>
             <Image 
                src="/caf-lifecycle.jpg" 
                alt="CAF Implementation Lifecycle" 
                width={1200} 
                height={800} 
                className="rounded-lg shadow-md w-full object-cover"
                priority
             />
          </div>
        </section>

        <section className="p-2">
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-200 pb-2">2. Site Reliability Engineering (SRE): Resilience by Design</h3>
          <p className="mb-4">At LaTaVi, we treat operations as a software engineering problem. By applying <strong className="text-slate-900">Site Reliability Engineering (SRE)</strong> principles, we bridge the gap between development speed and system stability.</p>
          <ul className="space-y-3 pl-4 border-l border-slate-200">
            <li><strong className="text-slate-900 text-sm font-semibold block">Service Level Objectives (SLOs)</strong> <p className="text-sm">We define data-driven reliability targets that matter to your end-users, moving away from vague "uptime" goals.</p></li>
            <li><strong className="text-slate-900 text-sm font-semibold block">Error Budgets</strong> <p className="text-sm">We use error budgets to balance the pace of innovation with the need for stability.</p></li>
            <li><strong className="text-slate-900 text-sm font-semibold block">Toil Automation</strong> <p className="text-sm">We strive to eliminate "toil"—repetitive, manual operational tasks—through advanced scripting and automation.</p></li>
            <li><strong className="text-slate-900 text-sm font-semibold block">Blameless Post-mortems</strong> <p className="text-sm">When incidents occur, we focus on system flaws rather than human error, ensuring permanent fixes.</p></li>
          </ul>
        </section>

        <section className="bg-slate-900 text-slate-400 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">3. Zero Trust: Security Beyond the Perimeter</h3>
          <p className="mb-4 text-sm italic">"Never Trust, Always Verify."</p>
          <p className="mb-6 text-sm">LaTaVi implements a Zero Trust Architecture, ensuring access is never granted based on network location alone.</p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-4">
              <span className="text-azure font-mono">01.</span>
              <p><span className="text-white font-bold">Verified Identity:</span> Every user, device, and service must be authenticated and authorized.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-azure font-mono">02.</span>
              <p><span className="text-white font-bold">Least Privilege Access:</span> We strictly limit user permissions to the bare minimum required for their task.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-azure font-mono">03.</span>
              <p><span className="text-white font-bold">Micro-segmentation:</span> We break the network into granular zones, preventing lateral movement of threats.</p>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">4. DevSecOps: Security at the Speed of Code</h3>
          <p className="text-sm">Security isn't a "final check" at LaTaVi; it is woven into the very fabric of our development lifecycle. Through DevSecOps, we "shift security left," integrating automated vulnerability scanning and compliance checks directly into the CI/CD pipeline.</p>
        </section>

        <section className="bg-azure/5 p-6 rounded-xl border border-azure/20">
          <h4 className="font-bold text-azure mb-3 uppercase tracking-widest text-sm">Why Choose LaTaVi?</h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-600">
            <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Vendor Neutral</span> Works across Azure, AWS, and GCP.</li>
            <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Scalable</span> Designed to grow as your business grows.</li>
            <li className="flex flex-col gap-1"><span className="text-slate-900 font-bold uppercase">Audit-Ready</span> Automated governance and codified security.</li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 'cost',
    title: "AWS Cost Optimization",
    preview: "Stop the Cloud Leak: A Strategic 5-Step Guide to AWS Cost Optimization in 2026. Learn how to regain control of your cloud spend.",
    color: "aws",
    content: (
      <div className="space-y-8 text-slate-700 leading-relaxed font-sans text-base">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Stop the Cloud Leak: A Strategic 5-Step Guide to AWS Cost Optimization in 2026</h2>
          <p className="mb-4">In the current era of AI-driven transformation, cloud scalability is a superpower—but it can quickly become a financial liability if left unmonitored. For many organizations, the AWS bill is a "black box" that grows silently month over month. At <strong className="text-slate-900 font-bold">LaTaVi</strong>, we believe that every dollar saved on "zombie" resources is a dollar that can be reinvested into innovation and AI development.</p>
          <p>Whether you are a startup or a scaling enterprise, optimizing your AWS footprint isn't a one-time task; it’s a continuous culture. Here is our expert-led, 5-step framework to regaining control of your cloud spend.</p>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-aws">
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Step 1: Establish Absolute Visibility (The Tagging Foundation)</h3>
          <p className="mb-4 text-sm">You cannot optimize what you cannot see. Most "bill shock" happens because resources are provisioned without clear ownership.</p>
          <ul className="space-y-2 mb-4 text-sm">
            <li><strong className="text-slate-900 font-semibold">• The Action:</strong> Implement a Mandatory Tagging Policy. Every resource must have tags for Environment (Dev/Prod), Project, and Owner.</li>
            <li><strong className="text-slate-900 font-semibold">• The Tool:</strong> Use <strong className="text-aws">AWS Cost Explorer</strong> to visualize spending patterns and <strong className="text-aws">AWS Budgets</strong> to set up "Early Warning" alerts. Set your alerts at 50%, 75%, and 90% of your budgeted amount.</li>
          </ul>
        </section>

        <section className="p-2">
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter border-b border-slate-200 pb-2">Step 2: Kill the "Zombies" (Clean Up Idle Resources)</h3>
          <p className="mb-4">The easiest "quick win" in cost optimization is deleting what you don't use.</p>
          <ul className="space-y-3 pl-4 border-l border-slate-200">
            <li><strong className="text-slate-900 text-sm font-semibold block">The Action:</strong> <p className="text-sm">Identify unattached EBS Volumes (storage from deleted instances), unassociated Elastic IPs, and idle Load Balancers.</p></li>
            <li><strong className="text-slate-900 text-sm font-semibold block">The Pro Tip:</strong> <p className="text-sm">Check for "orphaned" snapshots. Many teams automate backups but forget to set a lifecycle policy to delete them after 30 or 90 days.</p></li>
            <li><strong className="text-slate-900 text-sm font-semibold block">The Tool:</strong> <p className="text-sm">Run <strong className="text-slate-900">AWS Trusted Advisor</strong>; its cost optimization check will list these idle resources for you to delete.</p></li>
          </ul>
        </section>

        <section className="bg-slate-900 text-slate-400 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Step 3: "Right-Size" Your Compute</h3>
          <p className="mb-4 text-sm underline underline-offset-4 decoration-aws/50">Are you using a sledgehammer to crack a nut?</p>
          <p className="mb-6 text-sm">Many teams over-provision EC2 instances "just in case." Review your CPU and Memory utilization. If an instance is consistently running below 20%, it’s time to downsize.</p>
          <div className="bg-aws/10 border border-aws/20 p-4 rounded-lg">
            <span className="text-aws font-mono text-[10px] uppercase font-bold block mb-1">Modern Move</span>
            <p className="text-sm text-white">Migrate to <span className="font-bold text-white">AWS Graviton</span> (ARM-based) processors. They often provide up to 40% better price-performance compared to traditional x86 instances.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Step 4: Leverage Modern Pricing Models</h3>
          <p className="mb-6 text-sm">Paying "On-Demand" is the most expensive way to use AWS. It’s meant for unpredictable spikes, not steady workloads.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">Savings Plans</h4>
              <p className="text-xs">Commit to a consistent amount of usage for 1 or 3 years to save up to <span className="text-aws font-bold">72%</span>.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">Spot Instances</h4>
              <p className="text-xs">For fault-tolerant tasks (data processing, CI/CD), save up to <span className="text-aws font-bold">90%</span>.</p>
            </div>
          </div>
        </section>

        <section className="bg-aws/5 p-6 rounded-xl border border-aws/20">
          <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Step 5: Automate for the Future</h3>
          <p className="mb-6 text-sm font-mono italic">Manual reviews don't scale.</p>
          <div className="space-y-4">
            <p className="text-sm"><strong className="text-slate-900 font-bold uppercase text-xs">• Instance Scheduler:</strong> If your Dev/QA environments only need to be active during business hours, shut them down automatically from 8 PM to 8 AM. This alone can cut your costs by <strong className="text-slate-900">65%</strong>.</p>
            <p className="text-sm"><strong className="text-slate-900 font-bold uppercase text-xs">• Cost Anomaly Detection:</strong> Uses ML to send a Slack or email alert the moment something unusual happens—like an accidental infinite loop in a Lambda function.</p>
          </div>
        </section>

        <section className="pt-12 border-t border-slate-200">
           <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm text-center">Ready to optimize your infrastructure?</h4>
           <div className="flex flex-col items-center gap-6">
             <Link 
                href="/#contact" 
                className="bg-aws text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-slate-900 transition-colors shadow-lg shadow-aws/20"
             >
                BOOK_CLOUD_AUDIT
             </Link>
             <div className="text-center">
                <p className="text-xs text-slate-500 mb-2">Want to learn more about our foundational frameworks?</p>
                <Link 
                   href="/lab/excellence" 
                   className="text-aws font-mono text-xs font-bold underline underline-offset-4 hover:text-slate-900"
                >
                   VIEW_RELATED: ENGINEERING_EXCELLENCE
                </Link>
             </div>
           </div>
        </section>
      </div>
    )
  }
];
