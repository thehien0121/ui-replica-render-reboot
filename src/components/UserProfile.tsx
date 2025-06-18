import React from 'react';
import { User, Home, TrendingUp, Users } from 'lucide-react';

export const UserProfile: React.FC = () => {
  return (
    <aside className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-sm:p-4">
      <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-blue-600">
        <User className="w-6 h-6 text-white" />
      </div>
      
      <div className="text-black text-base font-semibold leading-6 mb-1">
        사용자님
      </div>
      <div className="text-gray-500 text-sm font-normal leading-5 mb-6">
        @username
      </div>
      
      <nav role="navigation" aria-label="User navigation">
        <button className="w-full h-10 flex items-center cursor-pointer mb-2 px-4 py-0 rounded-md hover:bg-gray-100 transition-colors">
          <Home className="w-6 h-6 text-gray-800 mr-3" />
          <span className="text-gray-800">홈</span>
        </button>
        <button className="w-full h-10 flex items-center cursor-pointer mb-2 px-4 py-0 rounded-md hover:bg-gray-100 transition-colors">
          <TrendingUp className="w-6 h-6 text-gray-800 mr-3" />
          <span className="text-gray-800">트렌드</span>
        </button>
        <button className="w-full h-10 flex items-center cursor-pointer mb-2 px-4 py-0 rounded-md hover:bg-gray-100 transition-colors">
          <Users className="w-6 h-6 text-gray-800 mr-3" />
          <span className="text-gray-800">친구</span>
        </button>
      </nav>
    </aside>
  );
};
