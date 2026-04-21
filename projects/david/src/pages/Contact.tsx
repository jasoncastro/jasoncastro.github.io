import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Let's Secure Your Next Project</h1>
          <p className="text-lg text-slate-600">
            Reach out for project pricing, safety inquiries, or scheduling a comprehensive compliance audit. We're here to build trust together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-brand-green text-white p-10 lg:p-12 flex flex-col">
            <h2 className="font-display text-3xl font-bold mb-8 text-emerald-50">Contact Information</h2>
            
            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-brand-yellow shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Location</h4>
                  <p className="text-emerald-100/80 leading-relaxed">124 Safety Blvd, Construction District<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-brand-yellow shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-emerald-100/80">+1 (555) 723-3890</p>
                  <p className="text-emerald-100/80 mt-1 text-sm">Mon-Fri 8am to 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg text-brand-yellow shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-emerald-100/80">inquiries@davidsafety.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
               <h4 className="font-bold text-lg mb-2">Emergency Support</h4>
               <p className="text-emerald-200 text-sm">For active site immediate emergencies, please call our 24/7 hotline explicitly provided in your contract.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
            <form className="space-y-6 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="first_name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="last_name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject / Inquiry Type</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all text-slate-700">
                  <option>Pricing Request</option>
                  <option>Safety Audit Inquiry</option>
                  <option>Compliance Concerns</option>
                  <option>General Questions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all resize-none" placeholder="Tell us about your project needs..."></textarea>
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-slate-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-green transition-colors">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
