import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Comprehensive Safety Audits",
      desc: "Detailed site inspections ensuring strict adherence to national and international safety regulations.",
      features: ["Daily/weekly site inspections", "Hazard identification", "Compliance reporting"]
    },
    {
      title: "PPE Compliance Management",
      desc: "End-to-end management of Personal Protective Equipment standards for all contractors and site visitors.",
      features: ["Requirement assessments", "On-site enforcement", "Equipment quality checks"]
    },
    {
      title: "On-site Safety Training",
      desc: "Equipping your workforce with the knowledge and tools necessary to maintain a secure environment.",
      features: ["Induction programs", "Protocol workshops", "Emergency response drills"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-20 bg-[url('https://images.unsplash.com/photo-1587841164993-9c869ea07da8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">Services & Projects</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Discover our tailored safety solutions and explore recent developments secured by our expert management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Services Grid */}
        <div className="text-center mb-12">
            <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="font-display text-3xl font-bold text-slate-900">Professional Safety Services</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((svc, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-display text-2xl font-bold text-slate-900 mb-4">{svc.title}</h4>
              <p className="text-slate-600 mb-6">{svc.desc}</p>
              <ul className="space-y-3">
                {svc.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Case Studies Header */}
        <div className="border-t border-slate-200 pt-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">Developments</h2>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 text-balance">
              Recent Secured Projects
            </h3>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {/* Project Template Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" alt="Construction Core" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold mb-4 w-max uppercase tracking-wider">
                Commercial Sector
              </div>
              <h4 className="font-display text-3xl font-bold text-slate-900 mb-4">Metro Central Mall Renewal</h4>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                David International was contracted to oversee the absolute compliance of PPE across 400+ daily workers in a high-traffic urban renovation project. Through rigorous daily audits and localized training, the project achieved a zero-incident milestone across 18 months.
              </p>
              <Link to="/contact" className="font-medium text-brand-green inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto w-max">
                Request a similar audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row-reverse group">
            <div className="md:w-2/5 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2579&auto=format&fit=crop" alt="Pipeline Construction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold mb-4 w-max uppercase tracking-wider">
                Infrastructure
              </div>
              <h4 className="font-display text-3xl font-bold text-slate-900 mb-4">Coastal Industrial Pipeline</h4>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Operating in a hazardous coastal environment required specialized PPE and strict environmental safety protocols. Our robust response and intervention strategies bolstered the overall quality of development while protecting natural surroundings.
              </p>
              <Link to="/contact" className="font-medium text-brand-green inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto w-max">
                Request a similar audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
