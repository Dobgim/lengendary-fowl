import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Catalog' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const PublicLayout = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-black text-primary-600 tracking-tight" onClick={closeMenu}>
              LEGEND FOWL
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-bold transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side: Cart + CTA + Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link to="/cart" className="relative text-slate-600 hover:text-primary-600 transition-colors">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* CTA Button - hidden on mobile */}
              <Link
                to="/quote"
                className="hidden sm:block bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary-600 transition-colors shadow-sm"
              >
                Request Quote
              </Link>

              {/* Hamburger Button - mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg animate-fade-in">
            <nav className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl font-bold text-lg transition-colors ${
                    location.pathname === link.to
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={closeMenu}
                className="mt-2 bg-slate-900 text-white text-center px-5 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-sm"
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
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
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal &amp; Support</h4>
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
