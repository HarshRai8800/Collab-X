import React from 'react';
import { Sidebar } from './sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="h-full flex flex-col max-w-7xl mx-auto">
          <div className="absolute top-4 right-4">
          </div>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}