
import { useState } from 'react';

interface AddTransactionScreenProps {
  onNavigate: (screen: string) => void;
}

const AddTransactionScreen = ({ onNavigate }: AddTransactionScreenProps) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('Bank 1');
  const [category, setCategory] = useState('Groceries');
  const [date, setDate] = useState('2025-05-24');
  const [notes, setNotes] = useState('');

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Add Transaction</h1>
      </div>

      {/* Form */}
      <div className="space-y-4 mt-8">
        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Type</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          >
            <option value="income" className="text-[#2ECC71]">Income</option>
            <option value="expense" className="text-[#E57373]">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Amount</label>
          <input 
            type="text" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="$100"
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
          <label className="block text-[#6B7280] font-medium mb-2">Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          >
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Date</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-[#6B7280]"
          />
        </div>

        <div>
          <label className="block text-[#6B7280] font-medium mb-2">Notes (Optional)</label>
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
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

export default AddTransactionScreen;
