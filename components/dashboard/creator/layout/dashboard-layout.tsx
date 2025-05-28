import { Sidebar } from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-[240px] p-4 md:p-8 pt-0 md:pt-8">
        {children}
      </main>
    </div>
  );
}