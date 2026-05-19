import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, PackageSearch, Stethoscope, ClipboardCheck, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: PackageSearch,
      title: "Live Bird Shipping",
      description: "We utilize USPS Priority Mail Express and specialized airline cargo specifically designed for live animal transport. Our custom shipping boxes feature climate control ventilation and GroGel supplements to keep your birds hydrated and stress-free during transit.",
      features: ["Next-Day Delivery Options", "Specialized Climate Boxes", "Live Arrival Guarantee"]
    },
    {
      icon: Stethoscope,
      title: "Veterinary Consultation",
      description: "Setting up a new flock? Our resident avian experts are available to consult on coop design, bio-security measures, and flock integration. We help you ensure your environment is perfectly suited for our premium breeds.",
      features: ["Coop Inspections", "Integration Strategies", "Dietary Planning"]
    },
    {
      icon: ClipboardCheck,
      title: "Bulk & Commercial Sourcing",
      description: "For commercial operations and large farms, we offer dedicated sourcing and breeding programs. We can supply hundreds of high-yield laying hens or meat birds at competitive wholesale rates.",
      features: ["Wholesale Pricing", "Custom Breed Programs", "Dedicated Account Manager"]
    },
    {
      icon: Truck,
      title: "Local Farm Pickup",
      description: "If you are located within driving distance of our facilities, you can schedule a farm pickup. This entirely eliminates shipping stress and allows you to view our operations firsthand.",
      features: ["Zero Shipping Fees", "Farm Tour Included", "Flexible Scheduling"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary-700 text-white py-20 border-b border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
          >
            What We Offer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto font-medium"
          >
            Beyond selling premium fowls, we provide end-to-end services to ensure your farming success.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <service.icon size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-800 font-bold text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
              Every farm is unique. If you require specialized transport, specific rare breeds, or bulk order logistics, our team is ready to assist.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-600/30"
            >
              Contact Our Team <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
