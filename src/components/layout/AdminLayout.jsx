import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, List, ShoppingCart, MessageSquare, Image as ImageIcon, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();
  
  // In a real app, you would check AuthContext here
  // const { user, signOut } = useAuth();

  const handleLogout = () => {
    // signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-900 text-slate-300 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-secondary-800">
          <span className="text-xl font-bold text-white tracking-wide">Admin Panel</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <Link to="/admin" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/products" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <Package size={20} />
            <span>Products</span>
          </Link>
          <Link to="/admin/categories" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <List size={20} />
            <span>Categories</span>
          </Link>
          <Link to="/admin/orders" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <ShoppingCart size={20} />
            <span>Orders</span>
          </Link>
          <Link to="/admin/inquiries" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <MessageSquare size={20} />
            <span>Inquiries</span>
          </Link>
          <Link to="/admin/banners" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-secondary-800 hover:text-white transition-colors">
            <ImageIcon size={20} />
            <span>Banners</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-secondary-800">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-secondary-800 hover:text-red-300 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 border-b border-slate-200">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-600">Admin User</span>
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
              A
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
