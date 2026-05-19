import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Your Cart is Empty</h2>
        <p className="text-slate-600 mb-8 text-center max-w-md">Looks like you haven't added anything to your cart yet. Explore our catalog to find premium fowls and supplies.</p>
        <Link to="/products" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors">
          Browse Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Shopping Cart ({cartCount} items)</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-2/3 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                <img src={item.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80'} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900"><Link to={`/products/${item.id}`}>{item.title}</Link></h3>
                  <p className="text-slate-500 text-sm mt-1">{item.category}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-50 transition-colors"
                    >-</button>
                    <span className="px-4 py-1 font-medium border-x border-slate-200">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-50 transition-colors"
                    >+</button>
                  </div>
                  
                  <div className="w-24 text-right">
                    <span className="text-lg font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-slate-500 text-sm">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-slate-200 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/order')}
                className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
