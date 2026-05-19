import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const PublicLayout = () => {
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-black text-primary-600 tracking-tight">
              LEGEND FOWL
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-primary-600 font-bold transition-colors">Home</Link>
              <Link to="/products" className="text-slate-600 hover:text-primary-600 font-bold transition-colors">Catalog</Link>
              <Link to="/services" className="text-slate-600 hover:text-primary-600 font-bold transition-colors">Services</Link>
              <Link to="/about" className="text-slate-600 hover:text-primary-600 font-bold transition-colors">About</Link>
              <Link to="/contact" className="text-slate-600 hover:text-primary-600 font-bold transition-colors">Contact</Link>
            </nav>
            
            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative text-slate-600 hover:text-primary-600 transition-colors">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link to="/quote" className="hidden sm:block bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary-600 transition-colors shadow-sm">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-2xl font-black mb-6 tracking-tight">LEGEND FOWL</h3>
            <p className="text-sm leading-relaxed mb-6">Premium poultry catalog and ordering platform. We bring top-tier fowls, hatching eggs, and supplies directly to your farm with uncompromising quality.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary-400 transition-colors">Catalog</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <p className="text-sm font-medium mb-2">sales@legendfowl.com</p>
            <p className="text-sm font-medium mb-4">+1 (555) 123-4567</p>
            <p className="text-sm font-medium">123 Commerce Avenue<br/>Business District, NY 10001</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Legend Fowl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
