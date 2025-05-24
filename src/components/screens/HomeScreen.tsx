
import { Building, CreditCard, DollarSign, Plus } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-semibold text-[#6B7280]">Welcome to BudgetBlox</h1>
      </div>

      {/* Total Balance Card */}
      <div className="bg-[#2ECC71] rounded-lg p-6">
        <p className="text-[#6B7280] text-sm mb-2">Total Balance</p>
        <p className="text-white text-4xl font-bold">$1200</p>
      </div>

      {/* Budget Overview */}
      <div className="text-center">
        <p className="text-[#6B7280]">
          This Month: <span className="text-[#E57373]">$500 spent</span>, <span className="text-[#2ECC71]">$200 left</span>
        </p>
      </div>

      {/* Breakdown Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-[#6B7280]">Breakdown</h2>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building className="w-5 h-5 text-[#6B7280]" />
            <span className="text-[#6B7280]">Bank 1 with a Very Long Namet...</span>
          </div>
          <span className="text-[#2ECC71] font-semibold">$500</span>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-5 h-5 text-[#6B7280]" />
            <span className="text-[#6B7280]">Cash</span>
          </div>
          <span className="text-[#2ECC71] font-semibold">$200</span>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-[#6B7280]" />
              <span className="text-[#6B7280]">Credit Card</span>
            </div>
            <span className="text-[#E57373] font-semibold">-$5000</span>
          </div>
          <button className="text-[#E57373] text-sm">High Credit Balance</button>
        </div>
      </div>

      {/* Upcoming Bills Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-[#6B7280]">Upcoming Bills</h2>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h3 className="text-[#F1C40F] font-medium mb-1">Rent for the Really Big Apartment $800...</h3>
          <p className="text-[#6B7280] text-sm">Due May 30, 2025</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-[#F1C40F] font-medium mb-1">Internet Service Provider Bill $60</h3>
            <p className="text-[#6B7280] text-sm">Due June 5, 2025</p>
          </div>
          <button 
            onClick={() => onNavigate('add-bill')}
            className="bg-[#2ECC71] w-10 h-10 rounded-lg flex items-center justify-center ml-4"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
