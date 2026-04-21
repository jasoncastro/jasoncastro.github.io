import { Link } from 'react-router-dom';
import { Target, Compass, HardHat, FileText } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get to know the team and the principles that drive David International Safety Management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 text-center md:text-left">
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Target size={32} />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To embed uncompromising safety protocols and strict PPE compliance into every construction endeavor, ensuring the absolute protection of human lives while bringing efficiency and unwavering quality to our clients' projects. 
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 border-b-4 border-b-brand-yellow">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Compass size={32} />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the globally recognized benchmark for integrity and professional safety management, transforming hazardous environments into secure, high-quality development sites where every worker thrives.
            </p>
          </div>

        </div>

        {/* The Story Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="font-display text-base text-brand-green font-bold tracking-wider uppercase mb-3">Our Origins</h2>
              <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">
                The Story of David International
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  David International Safety Management was born out of a critical gap in the industry. Years ago, while overseeing complex urban infrastructure projects, our founder witnessed a glaring issue: safety was often treated as an afterthought—a checkbox rather than a core foundation.
                </p>
                <p>
                  This lack of systemic safety oversight led to preventable injuries, disrupted timelines, and severed trust between contractors and clients. Convinced that <strong>professionalism requires protection</strong>, David International was established.
                </p>
                <p>
                  We started by implementing strict, zero-compromise Personal Protective Equipment (PPE) regulations on a single site. The result? A perfectly executed project with zero lost-time incidents and a remarkable boost in overall worker morale and productivity. Today, we bring that same zeal and meticulous attention to detail to every partnered development.
                </p>
              </div>
            </div>
            
            <div className="relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop" 
                alt="Early days of safety management planning" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24 text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-12">Built on Integrity. Driven by Excellence.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: 'Integrity', desc: 'Doing the right thing, even when no one is watching.' },
                 { title: 'Protection', desc: 'PPE compliance as a non-negotiable standard.' },
                 { title: 'Efficiency', desc: 'Minimizing risks to maximize project quality.' },
                 { title: 'Partnership', desc: 'Building trust with transparent reporting.' },
               ].map((val, i) => (
                 <div key={i} className="bg-slate-100 p-8 rounded-2xl">
                    <h4 className="font-bold text-xl text-slate-900 mb-2">{val.title}</h4>
                    <p className="text-slate-600">{val.desc}</p>
                 </div>
               ))}
            </div>
        </div>
      </div>
    </div>
  );
}
