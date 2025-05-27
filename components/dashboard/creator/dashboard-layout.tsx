'use client';

import Header from "./Header";
import Sidebar from "./Sidebar";


interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden md:block md:w-64 lg:w-72">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <Header title={title} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}