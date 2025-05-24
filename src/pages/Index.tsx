
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, User, Settings, Menu } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Home</CardTitle>
                <CardDescription>Your mobile app is ready!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">This is your home screen with mobile-optimized content.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline">
                  Action 1
                </Button>
                <Button className="w-full" variant="outline">
                  Action 2
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                  </div>
                  <Button className="w-full">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>App preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span>Notifications</span>
                  <Button variant="outline" size="sm">Toggle</Button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Dark Mode</span>
                  <Button variant="outline" size="sm">Toggle</Button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Language</span>
                  <Button variant="outline" size="sm">English</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Mobile App</h1>
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 pb-20">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === 'settings' ? 'text-blue-600' : 'text-gray-500'
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
