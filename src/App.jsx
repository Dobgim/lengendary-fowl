import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

import HomePage from './pages/public/HomePage';
import CatalogPage from './pages/public/CatalogPage';
import ProductDetailsPage from './pages/public/ProductDetailsPage';
import PlaceOrderPage from './pages/public/PlaceOrderPage';
import ContactPage from './pages/public/ContactPage';
import CartPage from './pages/public/CartPage';
import ServicesPage from './pages/public/ServicesPage';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageProducts from './pages/admin/ManageProducts';
import AddProduct from './pages/admin/AddProduct';
import ManageOrders from './pages/admin/ManageOrders';
import AboutPage from './pages/public/AboutPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<CatalogPage />} />
            <Route path="products/:slug" element={<ProductDetailsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="order" element={<PlaceOrderPage />} />
            <Route path="order/:productId" element={<PlaceOrderPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="quote" element={<ContactPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>

          {/* Admin Auth Route without Layout */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes with Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="categories" element={<div className="p-8 font-bold text-slate-800">Manage Categories (Coming Soon)</div>} />
            <Route path="orders" element={<ManageOrders />} />
            <Route path="inquiries" element={<div className="p-8 font-bold text-slate-800">Manage Inquiries (Coming Soon)</div>} />
            <Route path="banners" element={<div className="p-8 font-bold text-slate-800">Manage Banners (Coming Soon)</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
