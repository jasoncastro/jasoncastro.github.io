import { HardHat, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="text-brand-yellow">
                <HardHat size={32} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">David Int.</span>
                <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Safety Management</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pioneering safety, efficiency, and integrity in every construction project. Zero-compromise PPE compliance and safety protocols.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Services & Projects</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Core Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400">PPE Compliance Audits</li>
              <li className="text-slate-400">Safety Risk Assessments</li>
              <li className="text-slate-400">On-site Safety Training</li>
              <li className="text-slate-400">Equipment Inspections</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-yellow shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">124 Safety Blvd, Construction District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-yellow shrink-0" />
                <span className="text-slate-400 text-sm">+1 (555) 723-3890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-yellow shrink-0" />
                <span className="text-slate-400 text-sm">contact@davidsafety.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} David International Safety Management. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
