
import { useState } from 'react';

interface AddBillScreenProps {
  onNavigate: (screen: string) => void;
}

const AddBillScreen = ({ onNavigate }: AddBillScreenProps) => {
  const [billName, setBillName] = useState('');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('Bank 1');
  const [dueDate, setDueDate] = useState('2025-05-30');

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Add Bill</h1>
      </div>

      {/* Form */}
      <div className="space-y-4 mt-8">
        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Bill Name</label>
          <input 
            type="text" 
            value={billName}
            onChange={(e) => setBillName(e.target.value)}
            placeholder="Rent"
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          />
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Amount</label>
          <input 
            type="text" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$800"
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          />
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Money Source</label>
          <select 
            value={source} 
            onChange={(e) => setSource(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          >
            <option value="Bank 1">Bank 1</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Due Date</label>
          <input 
            type="date" 
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-24 left-4 right-4">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-[#2ECC71] text-white py-3 rounded-lg font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddBillScreen;
