
import { Building, CreditCard, DollarSign, Plus } from 'lucide-react';
import { useState } from 'react';

const SourcesScreen = () => {
  const [sources, setSources] = useState([
    { id: 1, name: 'Bank 1 with a Very Long Namet...', balance: 500, type: 'bank' },
    { id: 2, name: 'Cash', balance: 200, type: 'cash' },
    { id: 3, name: 'Credit Card', balance: -5000, type: 'credit' }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'bank': return <Building className="w-5 h-5 text-[#6B7280]" />;
      case 'cash': return <DollarSign className="w-5 h-5 text-[#6B7280]" />;
      case 'credit': return <CreditCard className="w-5 h-5 text-[#6B7280]" />;
      default: return <DollarSign className="w-5 h-5 text-[#6B7280]" />;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Money Sources</h1>
      </div>

      {/* Sources List */}
      <div className="space-y-4 mt-8">
        {sources.map((source) => (
          <div key={source.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getIcon(source.type)}
                <input 
                  type="text" 
                  value={source.name}
                  className="text-[#6B7280] bg-transparent border-none outline-none"
                  readOnly
                />
              </div>
              <span className={`font-semibold ${source.balance >= 0 ? 'text-[#2ECC71]' : 'text-[#E57373]'}`}>
                {source.balance >= 0 ? '$' : '-$'}{Math.abs(source.balance)}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="text-[#2ECC71] text-sm">Edit</button>
              <button className="text-[#E57373] text-sm">Delete</button>
            </div>
          </div>
        ))}

        {/* Add New Source */}
        <button className="w-full bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-center space-x-2 text-[#2ECC71]">
          <Plus className="w-5 h-5" />
          <span>Add New Source</span>
        </button>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-24 left-4 right-4">
        <button className="w-full bg-[#2ECC71] text-white py-3 rounded-lg font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default SourcesScreen;
