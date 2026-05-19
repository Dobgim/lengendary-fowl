import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const PlaceOrderPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Supabase insert
    console.log('Order submitted for items:', cart);
    console.log('Customer Details:', formData);
    
    setIsSubmitted(true);
    clearCart(); // Empty the cart after successful order
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-lg max-w-lg w-full text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Order Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed font-medium">
            Thank you, {formData.name}. Your order has been placed successfully. Our team will contact you shortly to confirm delivery.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-md"
          >
            Continue Browsing
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50">
        <ShoppingBag size={48} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">No items to checkout</h2>
        <p className="text-slate-600 mb-6">Your cart is empty. Please add items before placing an order.</p>
        <Link to="/products" className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-slate-500 hover:text-primary-600 font-bold mb-8 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Back to Cart
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="md:flex flex-row-reverse">
            
            {/* Order Summary Sidebar */}
            <div className="w-full md:w-1/3 bg-slate-100 p-8 border-b md:border-b-0 md:border-l border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-slate-200" />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.title}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Qty: {item.quantity}</span>
                        <span className="font-bold text-primary-600">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>Calculated later</span>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between font-black text-slate-900 text-xl">
                  <span>Total Due</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Delivery Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Delivery Location / Address *</label>
                  <textarea 
                    required 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    rows="3" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white resize-none" 
                    placeholder="Provide full address including city and postal code"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Additional Note (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow bg-slate-50 focus:bg-white resize-none" 
                    placeholder="Any specific delivery instructions?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 text-white font-black text-lg py-5 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1"
                  >
                    Confirm & Place Order
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
