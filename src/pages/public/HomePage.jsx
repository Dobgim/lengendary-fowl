import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Truck, CheckCircle, Heart, Award, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <img 
            src="/hero_fowl_farm.png"
            alt="Fowl Farm Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col justify-center min-h-[85vh]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              <span className="text-sm font-bold tracking-wide uppercase">Top Quality Breeders</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Legendary Fowls <br/>
              <span className="text-primary-500 bg-clip-text">Delivered to Your Farm</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our exclusive catalog of premium poultry. From prize-winning roosters to high-yield laying hens. Healthy, vaccinated, and ready for you.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link 
                to="/products" 
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-600/30 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Browse Poultry</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center hover:scale-105"
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-500">
            <div>
              <div className="text-4xl font-black mb-2">50+</div>
              <div className="text-primary-100 font-medium">Premium Breeds</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-primary-100 font-medium">Health Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">10K+</div>
              <div className="text-primary-100 font-medium">Happy Birds Sold</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">Safe</div>
              <div className="text-primary-100 font-medium">Live Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Farm Rooster" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <Heart size={32} />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">15+ Years</p>
                      <p className="text-slate-600 font-medium">Of Poultry Passion</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase">About Legend Fowl</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Raising the Standard of Poultry Farming.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                At Legend Fowl, we believe that the foundation of a great farm starts with exceptional genetics and impeccable care. For over a decade, we have dedicated ourselves to breeding the healthiest, most majestic fowls in the country.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Every bird we sell is hand-raised on our sprawling free-range pastures, fed a premium organic diet, and thoroughly checked by certified avian veterinarians before leaving our farm.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-2">The Legend Difference</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-4">Why Choose Us?</h3>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: 'NPIP Certified', desc: 'Our breeding flocks are rigorously tested and National Poultry Improvement Plan certified free of diseases.' },
              { icon: Award, title: 'Champion Genetics', desc: 'We select only the best traits. Our breeding program ensures high egg yield, beautiful plumage, and robust health.' },
              { icon: Truck, title: 'Stress-Free Delivery', desc: 'We utilize specialized climate-controlled transport boxes to ensure your birds arrive safely and happily.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-2">Our Services</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-4">What We Offer</h3>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Beyond selling premium fowls, we provide end-to-end services to ensure your farming success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Live Bird Shipping', desc: 'Specialized airline cargo and priority mail express with climate control.' },
              { icon: Shield, title: 'Veterinary Consult', desc: 'Expert advice on coop design, bio-security, and flock integration.' },
              { icon: Zap, title: 'Bulk Sourcing', desc: 'Dedicated sourcing for commercial operations and large farms at wholesale rates.' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-white shadow-sm text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 font-medium mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary-600 font-bold hover:text-primary-700 flex items-center justify-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Featured Flocks</h2>
              <p className="text-lg text-slate-600 font-medium">Discover our most sought-after breeds. Hand-raised for maximum health and vitality.</p>
            </div>
            <Link to="/products" className="hidden sm:flex bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors items-center space-x-2 shadow-md">
              <span>View Full Catalog</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '1', title: "Rhode Island Red", img: "/rhode_island_red.png", price: "45.00", category: "Live Birds" },
              { id: '2', title: "Silkie Bantam", img: "/silkie_bantam.png", price: "65.00", category: "Live Birds" },
              { id: '3', title: "Premium Organic Feed", img: "/organic_feed.png", price: "29.99", category: "Supplies" },
              { id: '4', title: "Fertile Hatching Eggs", img: "/hatching_eggs.png", price: "35.00", category: "Hatching Eggs" }
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <span className="text-2xl font-black text-slate-900">${item.price}</span>
                    <div className="flex space-x-2">
                       <button 
                         onClick={() => addToCart({ id: item.id, title: item.title, price: parseFloat(item.price), image: `${item.img}?auto=format&fit=crop&q=80&w=400&h=400`, category: item.category }, 1)}
                         className="bg-primary-50 text-primary-600 p-2.5 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                         title="Add to Cart"
                       >
                         <ShoppingCart size={20} />
                       </button>
                       <Link to={`/products/${item.id}`} className="bg-slate-900 text-white px-4 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                         View
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How To Order</h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Getting your premium birds is simple and straightforward. No complex registration walls.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>
            
            {[
              { icon: Zap, title: '1. Browse & Select', desc: 'Explore our curated collection of premium breeds and supplies, and add what you need to your cart.' },
              { icon: CheckCircle, title: '2. Place Order', desc: 'Review your cart and submit your delivery details securely. No account required to check out.' },
              { icon: Truck, title: '3. Fast Live Delivery', desc: 'We process your order immediately and dispatch your fowls via secure, specialized live shipping.' }
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 text-center relative z-10">
                <div className="w-20 h-20 bg-primary-100 border-4 border-slate-50 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm rotate-3 group-hover:rotate-6 transition-transform">
                  <step.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">From Our Farmers</h2>
            <p className="text-lg text-slate-400 font-medium">See why poultry enthusiasts trust Legend Fowl.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Miller", role: "Free-Range Farmer", text: "The Rhode Island Reds I got from Legend Fowl are absolutely stunning. High egg yield and incredibly healthy right out of the box." },
              { name: "Sarah Thorne", role: "Backyard Breeder", text: "Legend Fowl is my go-to for rare breeds. The Silkies arrived safely and the customer support was incredible." },
              { name: "Elena Rodriguez", role: "Commercial Supplier", text: "I regularly request bulk quotes for our commercial coops. Their team is incredibly responsive and always provides the best rates for high-quality birds." }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
                <div className="flex items-center space-x-1 mb-6 text-yellow-400">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-slate-400 text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-50 -skew-y-3 transform origin-top-left -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Ready to Upgrade Your Flock?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">Join thousands of farmers and enthusiasts who trust Legend Fowl for their premium birds and supplies.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-700 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Start Shopping Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
