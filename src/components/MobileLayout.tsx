
import { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
}

const MobileLayout = ({ children, title = "Mobile App" }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status bar spacer for mobile */}
      <div className="h-safe-area-top bg-white"></div>
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3">
        <h1 className="text-xl font-semibold text-center">{title}</h1>
      </div>

      {/* Content with safe area padding */}
      <div className="flex-1 px-4 py-4 pb-safe-area-bottom">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
