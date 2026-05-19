const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Products', value: '124' },
          { label: 'Active Orders', value: '12' },
          { label: 'Pending Inquiries', value: '5' },
          { label: 'Total Revenue', value: '$12,450' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium mb-2">{stat.label}</h3>
            <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 last:border-0 text-sm">
                <td className="py-4 font-medium text-slate-900">#ORD-001</td>
                <td className="py-4 text-slate-600">John Miller</td>
                <td className="py-4">
                  <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold">Pending</span>
                </td>
                <td className="py-4 text-slate-500">Today</td>
              </tr>
              <tr className="border-b border-slate-100 last:border-0 text-sm">
                <td className="py-4 font-medium text-slate-900">#ORD-002</td>
                <td className="py-4 text-slate-600">Sarah Thorne</td>
                <td className="py-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">Completed</span>
                </td>
                <td className="py-4 text-slate-500">Yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
