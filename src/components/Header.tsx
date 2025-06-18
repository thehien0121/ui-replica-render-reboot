import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full h-[65px] flex items-center justify-between fixed z-[1000] bg-white px-[30px] py-0 border-b border-solid left-0 top-0 max-sm:px-4 max-sm:py-0">
      <div className="text-blue-600 text-2xl font-bold leading-8">
        SocialHub
      </div>
      
      <div className="relative w-80 max-sm:w-[200px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
        <input
          type="text"
          placeholder="검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-10 border text-sm text-gray-600 bg-white pl-10 pr-4 py-0 rounded-md border-solid border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <nav className="flex gap-4" role="navigation" aria-label="Main navigation">
        <button 
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-800" />
        </button>
        <button 
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-md hover:bg-gray-100 transition-colors"
          aria-label="User profile"
        >
          <User className="w-6 h-6 text-gray-800" />
        </button>
      </nav>
    </header>
  );
};
