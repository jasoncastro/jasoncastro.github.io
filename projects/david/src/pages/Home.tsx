import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
            alt="Construction workers with PPE" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/30 border border-brand-green/50 text-emerald-300 font-medium text-sm mb-6">
              <ShieldCheck size={16} />
              <span>Zero-Compromise Safety Standards</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-balance leading-tight">
              Building Trust Through <span className="text-brand-yellow">Uncompromising Safety.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 text-pretty">
              David International Safety Management ensures strict PPE compliance and world-class safety protocols for your construction projects, building efficiency, quality, and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-green-dark hover:bg-yellow-300 px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Get a Safety Audit <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why PPE is a Must */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">The Importance of PPE</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-balance">
              Why Safety Management is a Must for Every Construction Project
            </h3>
            <p className="text-slate-600 text-lg">
              Safety isn't just about avoiding accidents; it is the foundation of trust, efficiency, and professional integrity in the construction business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green-light/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-brand-green rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:scale-110 transition-transform">
                <HardHat size={28} />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-4">Protecting Lives</h4>
              <p className="text-slate-600 leading-relaxed">
                Proper Personal Protective Equipment (PPE) is the last line of defense against severe hazards, ensuring every worker goes home safely.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green-light/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-4">Quality & Efficiency</h4>
              <p className="text-slate-600 leading-relaxed">
                A safe site is an efficient site. Mitigating risks reduces costly delays, disruptions, and bolsters the overall quality of developments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-green-light/30 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-100 text-brand-green rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:scale-110 transition-transform">
                <Award size={28} />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-4">Professional Integrity</h4>
              <p className="text-slate-600 leading-relaxed">
                Strict adherence to safety standards builds a rock-solid trusting relationship with target clients, portraying true professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Projects Highlights */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">Our Track Record</h2>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 text-balance">
                  Recent Projects & Services
                </h3>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-brand-green font-medium hover:text-brand-green-dark">
                View all developments <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop" alt="High-Rise Tower Construction" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-brand-yellow text-yellow-900 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow-sm">
                    Under Development
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-display text-2xl font-bold text-slate-900 mb-3">Apex Horizon Tower</h4>
                  <p className="text-slate-600 mb-6">Comprehensive safety oversight and weekly PPE audits for a 45-story commercial high-rise.</p>
                  <Link to="/services" className="font-medium text-brand-green inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read case study <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=2670&auto=format&fit=crop" alt="Infrastructure Bridge Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-emerald-100 text-brand-green text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow-sm">
                    Completed
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-display text-2xl font-bold text-slate-900 mb-3">Riverside Bridge Infrastructure</h4>
                  <p className="text-slate-600 mb-6">Full-scale hazard mitigation and worker safety training across a major metropolitan bridge.</p>
                  <Link to="/services" className="font-medium text-brand-green inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read case study <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-8 text-brand-yellow">
            <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.038 21.059c-2.308 0-4.148-1.782-4.148-3.953 0-2.174 1.84-3.957 4.148-3.957 1.139 0 2.227.464 2.973 1.258.117-.92.215-1.996.215-2.613 0-2.309-1.289-4.223-3.668-5.325l1.644-2.4c3.481 1.58 5.731 4.704 5.731 8.52 0 4.63-3.238 8.47-6.895 8.47zm13.723 0c-2.309 0-4.149-1.782-4.149-3.953 0-2.174 1.84-3.957 4.149-3.957 1.139 0 2.227.464 2.973 1.258.117-.92.215-1.996.215-2.613 0-2.309-1.289-4.223-3.668-5.325l1.644-2.4c3.481 1.58 5.731 4.704 5.731 8.52 0 4.63-3.238 8.47-6.895 8.47z"/>
            </svg>
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-medium leading-relaxed max-w-4xl mx-auto mb-10 text-emerald-50">
            "Partnering with David International transformed our site culture. Their firm commitment to strict PPE rules and proactive hazard mitigation gave our client complete confidence and kept our projects ahead of schedule without a single incident."
          </h2>
          <div className="flex flex-col items-center justify-center">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop" alt="Client portrait" className="w-16 h-16 rounded-full border-2 border-brand-yellow mb-4 object-cover" referrerPolicy="no-referrer" />
            <div className="font-bold font-display text-lg tracking-wide">Michael Thorne</div>
            <div className="text-emerald-300 text-sm uppercase font-semibold tracking-wider">Lead Developer, ConstructCore Inc.</div>
          </div>
        </div>
      </section>
      
      {/* Short Story & Mission (Teaser) */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/10 rounded-3xl transform -rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" alt="Safety Manager discussing with a worker" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -right-8 bg-brand-green text-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block">
                <div className="font-display font-bold text-4xl text-brand-yellow mb-2">15+</div>
                <div className="text-sm font-medium leading-snug">Years of unyielding commitment to safety.</div>
              </div>
            </div>
            
            <div>
              <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">Our Identity</h2>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Story Behind David International Safety Management
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded on the principle that every worker deserves to return home safe, David International started as a small consultation firm. Over the years, we witnessed firsthand how poor safety compliance delayed projects and cost lives.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our mission is clear: to deliver unwavering safety excellence and instill a culture of risk-awareness in construction. We believe that professionalism starts with preparation, and trust is built on integrity.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-medium transition-colors">
                Read our full story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">
              Ready to secure your next project?
            </h2>
            <p className="text-yellow-900 text-lg">
              Contact us today for project safety pricing, compliance concerns, or tailored risk assessments.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/contact" className="inline-block bg-brand-green-dark text-white hover:bg-brand-green px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
