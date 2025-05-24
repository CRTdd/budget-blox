
import { useState } from 'react';

const SettingsScreen = () => {
  const [currency, setCurrency] = useState('USD');
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Settings</h1>
      </div>

      {/* Settings Options */}
      <div className="space-y-4 mt-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <label className="block text-[#6B7280] font-medium mb-2">Currency</label>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-[#6B7280]"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
          <span className="text-[#6B7280] font-medium">Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full ${notifications ? 'bg-[#2ECC71]' : 'bg-gray-300'} relative transition-colors`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>
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

export default SettingsScreen;
