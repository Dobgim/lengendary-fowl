import { motion } from 'framer-motion';
import { Target, ShieldCheck, Users, MapPin, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1548509925-0e53ba215664?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            From a small family backyard to the premier poultry provider in the country.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80" 
                alt="Our Farm Operations" 
                className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-black text-slate-900">How It All Started</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Founded over 15 years ago, Legend Fowl began with a simple belief: the best birds come from environments where they are allowed to express their natural behaviors. What started with a small flock of heritage Rhode Island Reds has grown into a comprehensive, NPIP-certified operation.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We observed that many commercial hatcheries prioritized quantity over the health and vitality of the fowls. We decided to do things differently. By focusing on premium genetics, organic diets, and vast free-range pastures, we ensure every bird we raise is healthy, resilient, and stunning.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center text-slate-800 font-bold">
                  <CheckCircle className="text-emerald-500 mr-2" size={20} /> Family Owned
                </div>
                <div className="flex items-center text-slate-800 font-bold">
                  <CheckCircle className="text-emerald-500 mr-2" size={20} /> NPIP Certified
                </div>
                <div className="flex items-center text-slate-800 font-bold">
                  <CheckCircle className="text-emerald-500 mr-2" size={20} /> Ethical Breeding
                </div>
                <div className="flex items-center text-slate-800 font-bold">
                  <CheckCircle className="text-emerald-500 mr-2" size={20} /> Nationwide Shipping
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">The principles that guide our farm every single day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Commitment to Excellence</h3>
            <p className="text-slate-600 font-medium">We never cut corners. From our feed to our shipping boxes, everything is selected to ensure the absolute best for our birds.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Biosecurity & Health</h3>
            <p className="text-slate-600 font-medium">Our facilities operate under strict biosecurity protocols. We guarantee that every bird leaving our farm is healthy and vaccinated.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Community Support</h3>
            <p className="text-slate-600 font-medium">We don't just sell birds; we support farmers. Our expert team is always ready to assist you with care advice and support.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
