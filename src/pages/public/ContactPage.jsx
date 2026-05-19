import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question, need a custom quote, or want to inquire about bulk ordering? Send us a message and we'll get back to you promptly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white">
                    <option>General Inquiry</option>
                    <option>Request a Quote</option>
                    <option>Order Support</option>
                    <option>Bulk/Wholesale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="6" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="button" 
                  className="w-full md:w-auto bg-primary-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-primary-700 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
