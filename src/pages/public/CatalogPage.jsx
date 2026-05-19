import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const MOCK_PRODUCTS = [
  { id: '1', title: 'Rhode Island Red Pullet', price: 45.00, category: 'Live Birds', image: 'https://images.unsplash.com/photo-1548509925-0e53ba215664?auto=format&fit=crop&w=400&q=80' },
  { id: '2', title: 'Legendary Brahma Rooster', price: 149.50, category: 'Live Birds', image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=400&q=80' },
  { id: '3', title: 'Silkie Bantam Chicks (Pair)', price: 65.00, category: 'Live Birds', image: 'https://images.unsplash.com/photo-1614059089539-65b1285226c6?auto=format&fit=crop&w=400&q=80' },
  { id: '4', title: 'Premium Organic Starter Feed (50lbs)', price: 34.00, category: 'Supplies', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80' },
  { id: '5', title: 'Fertile Hatching Eggs (1 Dozen)', price: 35.00, category: 'Hatching Eggs', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=400&q=80' },
  { id: '6', title: 'Galvanized Poultry Waterer', price: 24.00, category: 'Supplies', image: 'https://images.unsplash.com/photo-1634538805602-53606f75567b?auto=format&fit=crop&w=400&q=80' },
];

const CATEGORIES = ['All', 'Live Birds', 'Hatching Eggs', 'Supplies'];

const CatalogPage = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Flock Catalog</h1>
          <p className="text-slate-600 max-w-2xl">Browse our complete collection of premium poultry and supplies. Find healthy fowls and place your order or request a quote effortlessly.</p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-10 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          
          <div className="flex items-center w-full md:w-auto overflow-x-auto pb-2 md:pb-0 space-x-2">
            <SlidersHorizontal size={20} className="text-slate-400 mr-2 hidden md:block" />
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search fowls or supplies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-slate-50"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <span className="text-2xl font-extrabold text-slate-900">${product.price.toFixed(2)}</span>
                    <div className="flex space-x-2">
                       <button 
                         onClick={() => addToCart({ ...product, price: parseFloat(product.price) }, 1)}
                         className="bg-primary-50 text-primary-600 p-2.5 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                         title="Add to Cart"
                       >
                         <ShoppingCart size={20} />
                       </button>
                       <Link 
                         to={`/products/${product.id}`} 
                         className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                       >
                         Details
                       </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <Filter size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No birds found</h3>
            <p className="text-slate-500">Try adjusting your search query or selected category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CatalogPage;
