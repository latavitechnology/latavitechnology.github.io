import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-mono text-xl text-azure mb-4">LaTaVi</h3>
          <p className="text-sm text-muted-foreground font-sans">
            Architecting the Global Cloud.<br />
            Precision-engineered infrastructure.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 font-mono">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-sans">
            <li><Link href="#" className="hover:text-azure">Microsoft Azure</Link></li>
            <li><Link href="#" className="hover:text-aws">Amazon Web Services</Link></li>
            <li><Link href="#" className="hover:text-white">Cloud Migration</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 font-mono">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-sans">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 font-mono">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-sans">
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground font-sans">
        &copy; {new Date().getFullYear()} LaTaVi Cloud Solutions. All rights reserved.
      </div>
    </footer>
  );
}
