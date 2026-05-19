import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: 1, title: 'Rhode Island Red Pullet', price: 45.00, category: 'Live Birds', stock: true },
  { id: 2, title: 'Legendary Brahma Rooster', price: 149.50, category: 'Live Birds', stock: true },
  { id: 3, title: 'Silkie Bantam Chicks (Pair)', price: 65.00, category: 'Live Birds', stock: false },
  { id: 4, title: 'Premium Organic Starter Feed (50lbs)', price: 34.00, category: 'Supplies', stock: true },
  { id: 5, title: 'Fertile Assorted Hatching Eggs', price: 35.00, category: 'Hatching Eggs', stock: true },
];

const ManageProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-slate-900">Manage Poultry & Supplies</h2>
        <Link 
          to="/admin/products/add" 
          className="bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center shadow-sm"
        >
          <Plus size={20} className="mr-2" />
          Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-sm text-slate-500 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold">Product Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PRODUCTS.map(product => (
                <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-sm">
                  <td className="px-6 py-4 font-medium text-slate-900">{product.title}</td>
                  <td className="px-6 py-4 text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 font-semibold text-slate-700">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    {product.stock ? (
                      <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">In Stock</span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-semibold">Out of Stock</span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-end space-x-3">
                    <button className="text-slate-400 hover:text-primary-600 transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button className="text-slate-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
