import { useState } from 'react';
import { Search, MoreVertical, CheckCircle, Clock, XCircle } from 'lucide-react';

const MOCK_ORDERS = [
  { id: 'ORD-001', customer: 'John Miller', item: 'Rhode Island Red Pullet (x4)', total: 180.00, status: 'pending', date: 'Oct 24, 2026' },
  { id: 'ORD-002', customer: 'Sarah Thorne', item: 'Fertile Hatching Eggs (x3 Dozen)', total: 105.00, status: 'processing', date: 'Oct 23, 2026' },
  { id: 'ORD-003', customer: 'Elena Rodriguez', item: 'Legendary Brahma Rooster', total: 149.50, status: 'completed', date: 'Oct 21, 2026' },
];

const ManageOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed': return <span className="flex items-center text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs font-semibold"><CheckCircle size={12} className="mr-1" /> Completed</span>;
      case 'processing': return <span className="flex items-center text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full text-xs font-semibold"><Clock size={12} className="mr-1" /> Processing</span>;
      case 'cancelled': return <span className="flex items-center text-red-700 bg-red-100 px-2.5 py-1 rounded-full text-xs font-semibold"><XCircle size={12} className="mr-1" /> Cancelled</span>;
      default: return <span className="flex items-center text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full text-xs font-semibold">Pending</span>;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-slate-900">Manage Orders</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by Order ID or Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex space-x-2">
             <select className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none text-sm text-slate-600 bg-white">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Completed</option>
             </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-sm text-slate-500 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Item(s)</th>
                <th className="px-6 py-4 font-semibold">Total</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ORDERS.map(order => (
                <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-sm">
                  <td className="px-6 py-4 font-bold text-slate-900">{order.id}</td>
                  <td className="px-6 py-4 text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{order.customer}</td>
                  <td className="px-6 py-4 text-slate-600 truncate max-w-[200px]">{order.item}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4 flex items-center justify-end">
                    <button className="text-slate-400 hover:text-primary-600 transition-colors p-1">
                      <MoreVertical size={18} />
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

export default ManageOrders;
