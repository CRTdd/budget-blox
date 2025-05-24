
import { useState } from 'react';
import { Home, User, Settings, Sources } from "lucide-react";
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import SourcesScreen from '../components/screens/SourcesScreen';
import AddTransactionScreen from '../components/screens/AddTransactionScreen';
import AddBillScreen from '../components/screens/AddBillScreen';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderContent = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'sources':
        return <SourcesScreen />;
      case 'add-transaction':
        return <AddTransactionScreen onNavigate={setCurrentScreen} />;
      case 'add-bill':
        return <AddBillScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Content */}
      <div className="flex-1 pb-20">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex">
          <button
            onClick={() => {
              setActiveTab('home');
              setCurrentScreen('home');
            }}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'home' ? 'bg-[#27AE60] text-white' : 'text-[#6B7280]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('profile');
              setCurrentScreen('profile');
            }}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'profile' ? 'bg-[#27AE60] text-white' : 'text-[#6B7280]'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('sources');
              setCurrentScreen('sources');
            }}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'sources' ? 'bg-[#27AE60] text-white' : 'text-[#6B7280]'
            }`}
          >
            <Sources className="w-5 h-5" />
            <span className="text-xs">Sources</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('settings');
              setCurrentScreen('settings');
            }}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'settings' ? 'bg-[#27AE60] text-white' : 'text-[#6B7280]'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
