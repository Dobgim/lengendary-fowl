import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, Save } from 'lucide-react';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    stock: true,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Supabase insert
    console.log('Product added:', formData);
    navigate('/admin/products');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Link to="/admin/products" className="text-slate-500 hover:text-primary-600 mr-4 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h2 className="text-2xl font-bold text-slate-900">Add New Product</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Title *</label>
                <input 
                  type="text" 
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="e.g. Smart Watch Pro"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Price ($) *</label>
                  <input 
                    type="number" 
                    step="0.01"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors" 
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category *</label>
                  <select 
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors"
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                <textarea 
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 focus:bg-white transition-colors resize-none" 
                  placeholder="Product details and specifications..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="stock" 
                  name="stock"
                  checked={formData.stock}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                />
                <label htmlFor="stock" className="text-sm font-medium text-slate-700">Product is in stock and available for order</label>
              </div>
            </div>

            {/* Image Upload Area */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Product Image</label>
              <div className="mt-2 flex justify-center rounded-2xl border border-dashed border-slate-300 px-6 py-20 hover:bg-slate-50 transition-colors cursor-pointer bg-slate-50/50">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-slate-400" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                    <span className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500">
                      Upload a file
                    </span>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-slate-500">PNG, JPG, GIF up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end space-x-4">
            <Link 
              to="/admin/products"
              className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </Link>
            <button 
              type="submit"
              className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center shadow-md"
            >
              <Save size={20} className="mr-2" />
              Save Product
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;
