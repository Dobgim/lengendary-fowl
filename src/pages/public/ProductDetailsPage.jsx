import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Info, ChevronLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  // Mock Data
  const product = {
    id: slug || '2',
    title: 'Legendary Brahma Rooster',
    price: 149.50,
    category: 'Live Birds',
    description: 'The majestic Brahma Rooster is often referred to as the "King of All Poultry". They are exceptionally large, stately birds with beautiful plumage down to their toes. Known for their calm and docile temperament, these roosters make excellent flock protectors and magnificent show birds.',
    image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80',
    features: ['Fully Vaccinated', 'Docile Temperament', 'NPIP Certified Flock', 'Safe Live Shipping'],
    availability: true
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/order');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-primary-600 font-bold mb-8 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Back to Flock Catalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 bg-slate-100 p-8 flex items-center justify-center min-h-[400px]">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={product.image} 
                alt={product.title} 
                className="w-full max-w-md rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-primary-600 uppercase">{product.category}</span>
                {product.availability ? (
                  <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    <CheckCircle size={14} className="mr-1.5" /> Available Now
                  </span>
                ) : (
                  <span className="inline-flex items-center text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                    <Info size={14} className="mr-1.5" /> Out of Season
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {product.title}
              </h1>
              
              <div className="text-4xl font-black text-slate-900 mb-8">
                ${product.price.toFixed(2)}
              </div>

              <div className="prose prose-slate max-w-none mb-10">
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-black text-slate-800 mb-4 uppercase tracking-wide text-sm">Key Details</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-600 font-medium">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-6">
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden h-14">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-5 text-slate-500 hover:bg-slate-50 hover:text-primary-600 font-bold text-xl h-full transition-colors"
                    >-</button>
                    <span className="px-4 font-black text-slate-900 border-x-2 border-slate-200 h-full flex items-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-5 text-slate-500 hover:bg-slate-50 hover:text-primary-600 font-bold text-xl h-full transition-colors"
                    >+</button>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    disabled={!product.availability}
                    className={`flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-sm ${
                      added 
                        ? 'bg-emerald-500 text-white shadow-emerald-200' 
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100 border-2 border-primary-100'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {added ? (
                      <>
                        <CheckCircle size={24} />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={24} />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleBuyNow}
                    disabled={!product.availability}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white h-14 rounded-xl font-bold text-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                  <Link 
                    to={`/quote?product=${product.id}`}
                    className="flex-1 bg-white hover:bg-slate-50 text-slate-800 h-14 rounded-xl font-bold text-lg flex items-center justify-center transition-all border-2 border-slate-200"
                  >
                    Request Bulk Quote
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
